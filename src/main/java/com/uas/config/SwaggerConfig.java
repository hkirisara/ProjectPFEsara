package com.uas.config;

import java.util.Collections;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.ApiKey;
import springfox.documentation.service.SecurityScheme;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfig {

	private static final String PACKAGE_REST = "com.uas.controller";

	@Bean
	public Docket serviceProviderApi() {
		return new Docket(DocumentationType.SWAGGER_2).groupName("Maintenance-Management-api-1.0").select()
				.apis(RequestHandlerSelectors.basePackage(PACKAGE_REST)).paths(PathSelectors.any()).build()
				.securitySchemes(Collections.singletonList(apiKey())).apiInfo(apiInfo());
	}

	private ApiInfo apiInfo() {
		return new ApiInfoBuilder().version("1.0").title("Maintenance Management API")
				.description("Documentation Maintenance Management API v1.0").build();
	}

	@Bean
	public SecurityScheme apiKey() {
		return new ApiKey(HttpHeaders.AUTHORIZATION, "Authorization", "header");
	}

}