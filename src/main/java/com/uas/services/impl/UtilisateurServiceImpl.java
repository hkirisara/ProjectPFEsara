package com.uas.services.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.uas.entity.Utilisateur;
import com.uas.repository.UtilisateurRepository;
import com.uas.services.UtilisateurService;

@Service
public class UtilisateurServiceImpl implements UtilisateurService {

	private final UtilisateurRepository utilisateurRepository;

	public UtilisateurServiceImpl(UtilisateurRepository utilisateurRepository) {
		this.utilisateurRepository = utilisateurRepository;
	}

	@Override
	public List<Utilisateur> getAllUtilisateur() {

		return utilisateurRepository.findAll();
	}

	@Override
	public Utilisateur getById(String id) {
		return utilisateurRepository.findById(id).get();
	}

	@Override
	public Utilisateur update(Utilisateur utilisateur) {
		return utilisateurRepository.save(utilisateur);
	}

	@Override
	public Utilisateur add(Utilisateur utilisateur) {
		return utilisateurRepository.save(utilisateur);
	}

	@Override
	public void delete(String id) {
		utilisateurRepository.deleteById(id);

	}

}