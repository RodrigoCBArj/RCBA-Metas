package br.com.rodrigocbarj.rcbametas.services;

import br.com.rodrigocbarj.rcbametas.entities.Sale;
import br.com.rodrigocbarj.rcbametas.repositories.SaleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;

@Service
public class SaleService {

    @Autowired
    private SaleRepository repository;

    public Page<Sale> findSales(String minDate,String maxDate, Pageable pageable) {

        LocalDate today = LocalDate.ofInstant(          // no instante:
                            Instant.now(),              // agora,
                            ZoneId.systemDefault());    // com base no fuso horário do sistema.

        LocalDate min = maxDate.equals("") ? today.minusYears(1) : LocalDate.parse(minDate);
        LocalDate max = maxDate.equals("") ? today : LocalDate.parse(maxDate);

        return repository.findSales(min, max, pageable);
    }
}
