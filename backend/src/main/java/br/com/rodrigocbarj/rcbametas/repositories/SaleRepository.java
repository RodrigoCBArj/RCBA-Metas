package br.com.rodrigocbarj.rcbametas.repositories;

import br.com.rodrigocbarj.rcbametas.entities.Sale;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;

public interface SaleRepository extends JpaRepository<Sale, Long> {

    @Query("SELECT s FROM Sale s WHERE s.date BETWEEN :min AND :max ORDER BY s.amount DESC")
    Page<Sale> findSales(LocalDate min, LocalDate max, Pageable pageable);
}
