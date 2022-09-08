package br.com.rodrigocbarj.rcbametas.repositories;

import br.com.rodrigocbarj.rcbametas.entities.Sale;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SaleRepository extends JpaRepository<Sale, Long> {
}
