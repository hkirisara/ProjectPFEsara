package com.uas.services;

import java.util.List;

import com.uas.entity.*;

public interface InterventionService {
	
	public List<Intervention> getAllIntervention();

	public List<Intervention> findAddedIntervention();

	public Intervention getById(String id);
	
	/*public List<Intervention> getIntervInDiag();*/

	public Intervention update(Intervention intervention);

	public Intervention add(Intervention intervention);

	public void delete(String id);
	
	List<Intervention> findAllInterventionprocessed();
	
	List<Intervention> findAllInterventionprocessedByClient(String idClient);

}