package com.uas.services;

import java.util.List;

import com.uas.entity.Utilisateur;

public interface UtilisateurService {

	public List<Utilisateur> getAllUtilisateur();

	public Utilisateur getById(String id);

	public Utilisateur update(Utilisateur utilisateur);

	public Utilisateur add(Utilisateur utilisateur);

	public void delete(String id);

}