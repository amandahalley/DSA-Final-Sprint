package com.keyin.rest.repository;

import com.keyin.rest.model.TreeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TreeRepository extends JpaRepository<TreeEntity, Long> {
}
