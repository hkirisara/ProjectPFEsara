package com.uas.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import org.hibernate.annotations.GenericGenerator;

@Entity
public class Utilisateur {

	@Id
	@GeneratedValue(generator = "user-uuid")
	@GenericGenerator(name = "user-uuid", strategy = "uuid2")
	private String id;

	private String cin;

	private String prenom;

	private String nom;

	private Integer telephone;

	private String certification;

	private String adresse;

	private String email;

	private String role;

	public String getId() {
		return id;
	}

	public Utilisateur() {
		super();

	}

	public Utilisateur(String cin, String prenom, String nom, Integer telephone, String certification, String adresse,
			String email, String role) {
		super();
		this.cin = cin;
		this.prenom = prenom;
		this.nom = nom;
		this.telephone = telephone;
		this.certification = certification;
		this.adresse = adresse;
		this.email = email;
		this.role = role;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getCin() {
		return cin;
	}

	public void setCin(String cin) {
		this.cin = cin;
	}

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public Integer getTelephone() {
		return telephone;
	}

	public void setTelephone(Integer telephone) {
		this.telephone = telephone;
	}

	public String getCertification() {
		return certification;
	}

	public void setCertification(String certification) {
		this.certification = certification;
	}

	public String getAdresse() {
		return adresse;
	}

	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	@Override
	public String toString() {
		return "Utilisateur [id=" + id + ", cin=" + cin + ", prenom=" + prenom + ", nom=" + nom + ", telephone="
				+ telephone + ", certification=" + certification + ", adresse=" + adresse + ", email=" + email
				+ ", role=" + role + "]";
	}

}
