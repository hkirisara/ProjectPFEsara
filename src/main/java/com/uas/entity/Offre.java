package com.uas.entity;

import java.util.*;

import javax.persistence.*;

import org.hibernate.annotations.GenericGenerator;

import com.fasterxml.jackson.annotation.JsonIgnore;
@Entity
public class Offre {
	@Id
	@GeneratedValue(generator = "offre-uuid")
	@GenericGenerator(name = "offre-uuid", strategy = "uuid2")
	private String id;

	private double totalHTV;
	private double TVA;
	private double timbre;
	private double totalTTC;
	
	@OneToMany(mappedBy = "offre", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private List<Diagnostic> diagnostics = new ArrayList<>();
	
	public double getTotalHTV () {
		return totalHTV;
	}
	
	public void setTotalHTV (double totalHTV) {
		this.totalHTV = totalHTV;
	}
	
	public double getTVA () {
		return TVA;
	}
	
	public void setTVA (double TVA) {
		this.TVA = TVA;
	}
	
	public double getTimbre () {
		return timbre;
	}
	
	public void setTimbre (double timbre) {
		this.timbre = timbre;
	}
	
	public double getTotalTTC () {
		return totalTTC;
	}
	
	public void setTotalTTC (double totalTTC) {
		this.totalTTC = totalTTC;
	}
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	
	


}
