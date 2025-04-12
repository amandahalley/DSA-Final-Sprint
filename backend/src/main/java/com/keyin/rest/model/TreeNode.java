package com.keyin.rest.model;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TreeNode {
    private int value;
    private TreeNode left;
    private TreeNode right;
}
