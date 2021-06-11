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
import com.uas.entity.Client;
import com.uas.services.ClientService;



@RestController
@RequestMapping("client")
public class ClientController {
	private final ClientService clientService;

	public ClientController(ClientService clientService) {
		this.clientService = clientService;
	}

	@GetMapping
	public List<Client> getAllClient() {
		System.out.print("je suis la");
		for(Client c:clientService.getAllClient())
			System.out.println(c);
		
		System.out.print("Client = "+clientService.getAllClient());
		return clientService.getAllClient();
	}

	@GetMapping("{id}")
	public Client getById(@PathVariable String id) {
		return clientService.getById(id);
	}

	@PostMapping
	public Client addClient(@RequestBody Client client) {
		return clientService.add(client);
	}

	@PutMapping
	public Client updateClient(@RequestBody Client client) {
		return clientService.update(client);
	}

	@DeleteMapping("{id}")
	public void deleteclient(@PathVariable String id) {
		clientService.delete(id);
	}


}
