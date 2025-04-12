package com.keyin.rest.model;


import lombok.Data;

@Data
public class BinarySearchTree {
    private TreeNode root;

    public void insert(int value) {
        root = insertRecursion(root, value);
    }

    private TreeNode insertRecursion(TreeNode node, int value) {
        if (node == null) return new TreeNode(value, null, null);
        if (value < node.getValue())
            node.setLeft(insertRecursion(node.getLeft(), value));
        else
            node.setRight(insertRecursion(node.getRight(),value));
        return node;
    }

}
