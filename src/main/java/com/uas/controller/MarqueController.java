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

import com.uas.entity.Marque;
import com.uas.services.MarqueService;


@RestController
@RequestMapping("marque")
public class MarqueController {
private final MarqueService marqueService;
	
	public MarqueController(MarqueService marqueService) {
		this.marqueService = marqueService;
	}
	@GetMapping
	public List<Marque> getAllMarque() {
		return marqueService.getAllMarque();
	}

	@GetMapping("{id}")
	public Marque getById(@PathVariable String id) {
		return marqueService.getById(id);
	}

	@PostMapping
	public Marque addMarque(@RequestBody Marque marque) {
		return marqueService.add(marque);
	}

	@PutMapping
	public Marque updateMarque(@RequestBody Marque marque) {
		return marqueService.update(marque);
	}

	@DeleteMapping("{id}")
	public void deletemarque(@PathVariable String id) {
		marqueService.delete(id);
	}

}
