package com.keyin.rest.controller;

import com.keyin.rest.model.TreeEntity;
import com.keyin.rest.model.TreeNode;
import com.keyin.rest.service.TreeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class TreeController {
    private final TreeService service;


    public TreeController (TreeService service) {
        this.service = service;
    }

    //adding tree to the database
    @PostMapping("/process-numbers")
    public TreeNode processNumbers(@RequestBody List<Integer> numbers) throws Exception {
        return service.createSaveTree(numbers);
    }

    //retrieve previous saved trees from database
    @GetMapping("/previous-trees")
    public List<TreeEntity> getPreviousTrees() {
        return service.getAllTrees();
    }
}
