CREATE TABLE [dbo].[Quotes] (
    [QuoteId] INT NOT NULL,
    [QuoteType]  NVARCHAR (200) NULL,
    [SalesPerson] NVARCHAR (200) NULL,
    [PremiumAmount] INT NULL,
    [DueDate] NVARCHAR (200) NULL,
	[Description] Date NULL,
    CONSTRAINT [PK_dbo.Quotes] PRIMARY KEY CLUSTERED ([QuoteId] ASC)
   
);

CREATE TABLE [dbo].[Users] (
    [Username] NVARCHAR (200) NOT NULL,
    [Password]  NVARCHAR (200) NULL,
    [ConfirmedPassword]  NVARCHAR (200) NULL,
    CONSTRAINT [PK_dbo.User] PRIMARY KEY CLUSTERED ([UserName] ASC)
   
);