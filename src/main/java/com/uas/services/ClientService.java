package com.uas.services;

import java.util.List;

import com.uas.entity.Client;


public interface ClientService {
	public List<Client> getAllClient();

	public Client getById(String id);

	public Client update(Client client);

	public Client add(Client client);

	public void delete(String id);

}
