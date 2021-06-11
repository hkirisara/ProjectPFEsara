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

import com.uas.entity.Typemateriel;
import com.uas.services.TypematerielService;

@RestController
@RequestMapping("typemateriel")
public class TypematerielController {
	
	private final TypematerielService typematerielService;
	
	public TypematerielController(TypematerielService typematerielService) {
		this.typematerielService = typematerielService;
	}
	@GetMapping
	public List<Typemateriel> getAllTypemateriel() {
		return typematerielService.getAllTypemateriel();
	}

	@GetMapping("{id}")
	public Typemateriel getById(@PathVariable String id) {
		return typematerielService.getById(id);
	}

	@PostMapping
	public Typemateriel addTypemateriel(@RequestBody Typemateriel typemateriel) {
		return typematerielService.add(typemateriel);
	}

	@PutMapping
	public Typemateriel updateTypemateriel(@RequestBody Typemateriel typemateriel) {
		return typematerielService.update(typemateriel);
	}

	@DeleteMapping("{id}")
	public void deletetypemateriel(@PathVariable String id) {
		typematerielService.delete(id);
	}

}
