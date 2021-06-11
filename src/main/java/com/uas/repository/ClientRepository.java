package com.uas.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.uas.entity.Client;

public interface ClientRepository extends JpaRepository<Client,String> {

}
