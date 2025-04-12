package com.keyin.rest.service;

import com.keyin.rest.model.TreeEntity;
import com.keyin.rest.model.TreeNode;
import com.keyin.rest.repository.TreeRepository;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class TestBackendApplication {

    @Autowired
    private TreeService treeService;

    @Autowired
    private TreeRepository treeRepository;

    @Test
    void testCreateSaveTree() throws Exception {
        List<Integer> input = Arrays.asList(5, 3, 7);
        TreeNode tree = treeService.createSaveTree(input);
        assertNotNull(tree);
        assertEquals(5, tree.getValue());
        assertEquals(3, tree.getLeft().getValue());
        assertEquals(7, tree.getRight().getValue());
    }

    @Test
    void testTreeSavedToDatabase() throws Exception {
        List<Integer> input = Arrays.asList(8, 4, 10);
        treeService.createSaveTree(input);

        List<TreeEntity> savedTrees = treeRepository.findAll();
        assertTrue(savedTrees.stream().anyMatch(t -> t.getNumbers().equals("8,4,10")));
    }

    @Test
    void testLeftSkewedTreeStructure() throws Exception {
        List<Integer> input = Arrays.asList(7, 5, 3, 1);
        TreeNode tree = treeService.createSaveTree(input);

        assertEquals(7, tree.getValue());
        assertEquals(5, tree.getLeft().getValue());
        assertEquals(3, tree.getLeft().getLeft().getValue());
        assertEquals(1, tree.getLeft().getLeft().getLeft().getValue());
        assertNull(tree.getRight());
    }

}

