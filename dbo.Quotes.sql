CREATE TABLE [dbo].[Quotes] (
    [QuoteId]       INT            NULL,
    [QuoteType]     NVARCHAR (200) NULL,
    [SalesPerson]   NVARCHAR (200) NULL,
    [PremiumAmount] INT            NULL,
    [DueDate]       date NULL,
    [Description]   NVARCHAR (200)           NULL,
    CONSTRAINT [PK_dbo.Quotes] PRIMARY KEY CLUSTERED ([QuoteId] ASC)
);

