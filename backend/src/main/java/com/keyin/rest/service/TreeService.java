package com.keyin.rest.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.keyin.rest.model.BinarySearchTree;
import com.keyin.rest.model.TreeEntity;
import com.keyin.rest.model.TreeNode;
import com.keyin.rest.repository.TreeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TreeService {
    private final TreeRepository repo;
    private final ObjectMapper mapper = new ObjectMapper();

    public TreeService(TreeRepository repo) {
        this.repo = repo;
    }

    public TreeNode createSaveTree(List<Integer> numbers) throws Exception {
        BinarySearchTree tree = new BinarySearchTree();
        for (int num : numbers) tree.insert(num);

        String treeJson = mapper.writeValueAsString(tree.getRoot());
        repo.save(new TreeEntity(null, numbers.toString(), treeJson));

        return tree.getRoot();
    }

    public List<TreeEntity> getAllTrees() {
        return repo.findAll();
    }
}
