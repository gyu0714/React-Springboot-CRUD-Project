package com.java.springboot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.java.springboot.repository.EmployeeRepository;

@SpringBootApplication
public class SpringbootReactBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootReactBackendApplication.class, args);
	}

	

}
