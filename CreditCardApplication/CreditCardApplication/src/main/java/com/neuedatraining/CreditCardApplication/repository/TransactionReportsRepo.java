package com.neuedatraining.CreditCardApplication.repository;


import com.neuedatraining.CreditCardApplication.dto.*;

import java.util.List;

public interface TransactionReportsRepo {
    List<StateSales> getTotalTransactionsByState();
    List<ProfessionSales> getTotalTransactionsByProfession();
    List<CategorySpend> getCategorySpendByState(String state);
    List<GenderCategorySpend> getCategorySpendByGender(String gender);
    List<Merchantspend> getCategorySpendByMerchant();

}