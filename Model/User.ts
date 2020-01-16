
    export  class Business {
        id: string;
        typeName: string;
        createdDate: Date;
        lastModifiedDate: Date;
        createdBy: string;
        lastModifiedBy: string;
        isTest: boolean;
        isDeleted: boolean;
        taxId: string;
        businessType: BusinessType;
      public businessName: string;
        phone: string;
        mobile: string;
        fax: string;
        email: string;
    }

    enum BusinessType {
        Individual = 1,
        Company = 2,
    }
