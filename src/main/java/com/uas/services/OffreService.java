package com.uas.services;

import java.util.List;


import com.uas.entity.Offre;

public interface OffreService {
	public List<Offre> getAllOffre();

	public Offre getById(String id);
	/*public Offre getOffreByClient(String idClient);*/
	public Offre update(Offre offre);

	public Offre add(Offre offre);

	public void delete(String id);

}
