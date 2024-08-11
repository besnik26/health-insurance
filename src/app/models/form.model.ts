export class FormModel {
    public insuranceType?:string;
    public fullName?: string;
    public email?: string;
    public mobile?: string;
    public terms?: boolean;
    public carBrand?:string;
    public carPlacing?:string;
    public provisionReason?:string;
    public provisionInvestmentPerMonth?:string;
    public legalIndividualOrFamily?:string;
    public legalCoverage?:string;
    public healthInsurance?:string;
    public healthFranchise?:string;
  
      constructor(data: {
        insuranceType?:string,
        fullName?: string,
        email?: string,
        mobile?:string,
        terms?:boolean,
        carBrand?:string,
        carPlacing?:string,
        provisionReason?:string,
        provisionInvestmentPerMonth?:string,
        legalIndividualOrFamily?:string,
        legalCoverage?:string,
        healthInsurance?:string,
        healthFranchise?:string

        }) {
        this.insuranceType = data.insuranceType;
        this.fullName = data.fullName;
        this.email = data.email;
        this.mobile = data.mobile;
        this.terms = data.terms;
        this.carBrand = data.carBrand;
        this.carPlacing = data.carPlacing;
        this.provisionReason = data.provisionReason;
        this.provisionInvestmentPerMonth = data.provisionInvestmentPerMonth;
        this.legalIndividualOrFamily = data.legalIndividualOrFamily;
        this.legalCoverage = data.legalCoverage;
        this.healthInsurance = data.healthInsurance;
        this.healthFranchise = data.healthFranchise;
    }  
}