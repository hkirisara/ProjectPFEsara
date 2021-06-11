package com.uas.services.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.uas.entity.Client;
import com.uas.repository.ClientRepository;
import com.uas.services.ClientService;
@Service
public class ClientServiceImpl implements ClientService {
	private final ClientRepository clientRepository;
	
	public ClientServiceImpl(ClientRepository clientRepository) {
		this.clientRepository = clientRepository;
	}

	@Override
	public List<Client> getAllClient() {
		return clientRepository.findAll();
	}

	@Override
	public Client getById(String id) {
		return clientRepository.findById(id).get();
	}

	@Override
	public Client update(Client client) {
		return clientRepository.save(client);
	}

	@Override
	public Client add(Client client) {
		return clientRepository.save(client);
	}

	@Override
	public void delete(String id) {
		clientRepository.deleteById(id);
		
	}


}
