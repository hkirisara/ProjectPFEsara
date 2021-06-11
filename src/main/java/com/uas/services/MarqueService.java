package com.uas.services;

import java.util.List;

import com.uas.entity.Marque;

public interface MarqueService {
	public List<Marque> getAllMarque();

	public Marque getById(String id);

	public Marque update(Marque marque);

	public Marque add(Marque marque);

	public void delete(String id);
}
