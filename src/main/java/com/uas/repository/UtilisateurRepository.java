package com.uas.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.uas.entity.Utilisateur;

public interface UtilisateurRepository extends JpaRepository<Utilisateur, String> {

}