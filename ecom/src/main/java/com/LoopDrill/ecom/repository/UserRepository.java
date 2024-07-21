package com.LoopDrill.ecom.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.LoopDrill.ecom.entity.*;
import com.LoopDrill.ecom.enums.UserRole;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
	Optional<User> findFirstByEmail(String email);
	User findByRole(UserRole userRole);
}
