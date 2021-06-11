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

import com.uas.entity.Intervention;
import com.uas.services.InterventionService;

@RestController
@RequestMapping("intervention")
public class InterventionController {
	
	private final InterventionService interventionService;

	public InterventionController(InterventionService interventionService) {
		this.interventionService = interventionService;
	}

	
	@GetMapping
	public List<Intervention> getAllIntervention() {
		return interventionService.getAllIntervention();
	}
	
	@GetMapping("/processed")
	public List<Intervention> getAllInterventionProcessed() {
		return interventionService.findAllInterventionprocessed();
	}
	
	@GetMapping("/processed/{id}")
	public List<Intervention> getAllInterventionProcessedByClient(@PathVariable String id) {
		return interventionService.findAllInterventionprocessedByClient(id);
	}
	/*@GetMapping("/added")
	public List<Intervention> findAddedIntervention() {
		return interventionService.findAddedIntervention();
	}*/
	
	/*@GetMapping
	public List<Intervention> getIntervInDiag() {
		return interventionService.getIntervInDiag();
	}*/
	
	
	/*@GetMapping("/addedd")
	public List<Intervention> findAddeddIntervention() {
		return interventionService.findAddedIntervention();
	}*/

	@GetMapping("{id}")
	public Intervention getById(@PathVariable String id) {
		return interventionService.getById(id);
	}

	@PostMapping
	public Intervention addIntervention(@RequestBody Intervention intervention) {
		
		return interventionService.add(intervention);
	}

	@PutMapping
	public Intervention updateIntervention(@RequestBody Intervention intervention) {
		return interventionService.update(intervention);
	}

	@DeleteMapping("{id}")
	public void deleteintervention(@PathVariable String id) {
		interventionService.delete(id);
	}

}