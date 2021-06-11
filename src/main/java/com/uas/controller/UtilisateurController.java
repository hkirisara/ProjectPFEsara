package com.uas.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.uas.entity.Utilisateur;
import com.uas.services.UtilisateurService;

@RestController
@RequestMapping("utilisateurs")
public class UtilisateurController {

	private final UtilisateurService utilisateurService;

	public UtilisateurController(UtilisateurService utilisateurService) {
		this.utilisateurService = utilisateurService;
	}

	@GetMapping
	public List<Utilisateur> getAllUtilisateur() {
		return utilisateurService.getAllUtilisateur();
	}

	@GetMapping("{id}")
	public Utilisateur getById(@PathVariable String id) {
		return utilisateurService.getById(id);
	}

	@PostMapping
	public Utilisateur addUtilisateur(@RequestBody Utilisateur utilisateur) {
		return utilisateurService.add(utilisateur);
	}

	@PutMapping
	public Utilisateur updateUtilisateur(@RequestBody Utilisateur utilisateur) {
		return utilisateurService.update(utilisateur);
	}

	@DeleteMapping("{id}")
	public void deleteutilisateur(@PathVariable String id) {
		utilisateurService.delete(id);
	}

}
