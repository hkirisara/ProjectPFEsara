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

import com.uas.dto.AffectationDTO;
import com.uas.entity.Affectation;
import com.uas.services.AffectationService;

@RestController
@RequestMapping("affectation")
public class AffectationController {
	private final AffectationService affectationService;

	public AffectationController(AffectationService affectationService) {
		this.affectationService = affectationService;
}
	@GetMapping
	public List<Affectation> getAllIntervention() {
		return affectationService.getAllAffectation();
	}

	@GetMapping("{id}")
	public Affectation getById(@PathVariable String id) {
		return affectationService.getById(id);
	}

	@PostMapping
	public Affectation addAffectation(@RequestBody AffectationDTO affectationDTO) {
		return affectationService.add(affectationDTO);
	}

	@PutMapping
	public Affectation updateAffectation(@RequestBody Affectation affectation) {
		return affectationService.update(affectation);
	}

	@DeleteMapping("{id}")
	public void deleteaffectation(@PathVariable String id) {
		affectationService.delete(id);
	}
	
}
