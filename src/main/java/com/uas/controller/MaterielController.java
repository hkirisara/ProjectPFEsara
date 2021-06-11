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

import com.uas.entity.Materiel;
import com.uas.services.MaterielService;

@RestController
@RequestMapping("materiel")
public class MaterielController {
	private final MaterielService materielService;

	public MaterielController(MaterielService materielService) {
		this.materielService = materielService;
	}

	@GetMapping
	public List<Materiel> getAllMarque() {
		return materielService.getAllMateriel();
	}

	@GetMapping("{id}")
	public Materiel getById(@PathVariable String id) {
		return materielService.getById(id);
	}

	@GetMapping("{idType}/{idMarque}")
	public Materiel getMatrielByTypeAndMarque(@PathVariable String idType, @PathVariable String idMarque) {
		return materielService.getMatrielByTypeAndMarque(idType, idMarque);
	}
	@GetMapping("{idType}/{idMarque}/{idModel}")
	public Materiel getMatrielByTypeAndMarqueAndModel(@PathVariable String idType, @PathVariable String idMarque, @PathVariable String idModel) {
		return materielService.getMatrielByTypeAndMarqueAndModel(idType, idMarque,idModel);
	}

	@PostMapping
	public Materiel addMateriel(@RequestBody Materiel materiel) {
		return materielService.add(materiel);
	}

	@PutMapping
	public Materiel updateMateriel(@RequestBody Materiel materiel) {
		return materielService.update(materiel);
	}

	@DeleteMapping("{id}")
	public void deletemateriel(@PathVariable String id) {
		materielService.delete(id);
	}
}
