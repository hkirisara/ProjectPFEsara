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


import com.uas.entity.Offre;
import com.uas.services.OffreService;

@RestController
@RequestMapping("offre")
public class OffreController {
	private final OffreService offreService;

	public OffreController(OffreService offreService) {
		this.offreService = offreService;
	}
	
	@GetMapping
	public List<Offre> getAllOffre() {
		return offreService.getAllOffre();
	}

	@GetMapping("{id}")
	public Offre getById(@PathVariable String id) {
		return offreService.getById(id);
	}

	@PostMapping
	public Offre addOffre(@RequestBody Offre offre) {
		return offreService.add(offre);
	}

	@PutMapping
	public Offre updateClient(@RequestBody Offre offre) {
		return offreService.update(offre);
	}

	@DeleteMapping("{id}")
	public void deleteoffre(@PathVariable String id) {
		offreService.delete(id);
	}
	
	
}
