package com.uas.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import org.hibernate.annotations.GenericGenerator;

@Entity
public class Client {
	@Id
	@GeneratedValue(generator = "cust-uuid")
	@GenericGenerator(name = "cust-uuid", strategy = "uuid2")
	private String id;

	private String raisonsocial;

	private String adresse;

	private String ville;

	private Integer telephone;

	private String email;

	private Boolean tva;
	
	private Boolean timbre;
	
	private Boolean remise;

	public Client() {
		super();
		
	}

		
	public Client(String raisonsocial, String adresse, String ville, Integer telephone, String email, Boolean tva,
			Boolean timbre, Boolean remise) {
		super();
		this.raisonsocial = raisonsocial;
		this.adresse = adresse;
		this.ville = ville;
		this.telephone = telephone;
		this.email = email;
		this.tva = tva;
		this.timbre = timbre;
		this.remise = remise;
	}


	

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getRaisonsocial() {
		return raisonsocial;
	}

	public void setRaisonsocial(String raisonsocial) {
		this.raisonsocial = raisonsocial;
	}

	public String getAdresse() {
		return adresse;
	}

	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}

	public String getVille() {
		return ville;
	}

	public void setVille(String ville) {
		this.ville = ville;
	}

	public Integer getTelephone() {
		return telephone;
	}

	public void setTelephone(Integer telephone) {
		this.telephone = telephone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Boolean getTva() {
		return tva;
	}

	public void setTva(Boolean tva) {
		this.tva = tva;
	}

	public Boolean getTimbre() {
		return timbre;
	}

	public void setTimbre(Boolean timbre) {
		this.timbre = timbre;
	}

	public Boolean getRemise() {
		return remise;
	}

	public void setRemise(Boolean remise) {
		this.remise = remise;
	}


	@Override
	public String toString() {
		return "Client [id=" + id + ", raisonsocial=" + raisonsocial + ", adresse=" + adresse + ", ville=" + ville
				+ ", telephone=" + telephone + ", email=" + email + ", tva=" + tva + ", timbre=" + timbre + ", remise="
				+ remise + "]";
	}

	

	

}
