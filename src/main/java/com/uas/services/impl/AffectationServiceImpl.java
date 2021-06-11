package com.uas.services.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.Service;

import com.uas.dto.AffectationDTO;
import com.uas.entity.Affectation;
import com.uas.entity.Diagnostic;
import com.uas.entity.Intervention;
import com.uas.entity.Utilisateur;
import com.uas.repository.AffectationRepository;
import com.uas.repository.InterventionRepository;
import com.uas.repository.UtilisateurRepository;
import com.uas.services.AffectationService;

@Service
public class AffectationServiceImpl implements AffectationService {
	private final AffectationRepository affectationRepository;

	private final UtilisateurRepository userRepo;
	@Autowired
	InterventionRepository interventionRepository;

	public AffectationServiceImpl(AffectationRepository affectationRepository, UtilisateurRepository userRepo) {
		this.affectationRepository = affectationRepository;
		this.userRepo = userRepo;
	}

	@Override
	public List<Affectation> getAllAffectation() {
		return affectationRepository.findAll();
	}

	@Override
	public Affectation getById(String id) {
		return affectationRepository.findById(id).get();
	}

	@Override
	public Affectation update(Affectation affectation) {
		return affectationRepository.save(affectation);
	}

		@Override
	public Affectation add(AffectationDTO affectationDTO) {
		if (affectationDTO.getAffectationIds() != null && affectationDTO.getUserId() != null) {
			Affectation affectation=new Affectation();
			Utilisateur  user = userRepo.findById(affectationDTO.getUserId()).get();
			for (String el : affectationDTO.getAffectationIds()) {
			//TODO  foreach intervention
				//- create new instance of affectation
				//- set the technical person to the affectation
				// save the affectation
				// set the intervationId as the new affectation created
				Intervention intervention = interventionRepository.findById(el).get();
				
					affectation.setUtilisateur(user);
					affectation=affectationRepository.save(affectation);
					intervention.setAffect(user.getNom() + user. getPrenom());
					intervention.setAffectation(affectation);
					interventionRepository.save(intervention);
			}
			return affectation;
		}
		else return null;
	}

	@Override
	public void delete(String id) {
		affectationRepository.deleteById(id);

	}

	/*@Override
	public Affectation add(Affectation affectation) {
		return affectationRepository.save(affectation);
	}*/


	
}
