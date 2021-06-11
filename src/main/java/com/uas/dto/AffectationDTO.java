package com.uas.dto;

import java.util.List;

public class AffectationDTO {

	private String userId;

	private List<String> affectationIds;

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public List<String> getAffectationIds() {
		return affectationIds;
	}

	public void setAffectationIds(List<String> affectationIds) {
		this.affectationIds = affectationIds;
	}

}