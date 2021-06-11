package com.uas.services;

import java.util.List;

import com.uas.dto.AffectationDTO;
import com.uas.entity.Affectation;



public interface AffectationService {
	public List<Affectation> getAllAffectation();

	public Affectation getById(String id);

	public Affectation update(Affectation affectation);
	/*public Affectation add( Affectation affectation);*/
	public Affectation add(AffectationDTO affectation);
	
	/*public Diagnostic add(String interventionId, Affectation affectation);*/
	public void delete(String id);

}
