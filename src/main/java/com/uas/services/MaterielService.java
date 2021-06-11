package com.uas.services;

import java.util.List;

import com.uas.entity.Materiel;

public interface MaterielService {
	public List<Materiel> getAllMateriel();

	public Materiel getById(String id);
	
	public Materiel getMatrielByTypeAndMarque(String idType, String idMarque);
	public Materiel getMatrielByTypeAndMarqueAndModel(String idType,String idMarque,String idModel);
	

	public Materiel update(Materiel materiel);

	public Materiel add(Materiel materiel);

	public void delete(String id);
}
