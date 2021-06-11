package com.uas.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.uas.entity.Marque;


public interface MarqueRepository extends JpaRepository<Marque, String>  {

}
