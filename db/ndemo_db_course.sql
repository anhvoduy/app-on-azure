USE [ndemo];
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

--
-- Table structure for table `Course`
--
IF (EXISTS (SELECT * 
			FROM INFORMATION_SCHEMA.TABLES
			WHERE TABLE_CATALOG='ndemo' AND TABLE_SCHEMA = 'dbo' AND  TABLE_NAME = 'Course'))
BEGIN
	DROP TABLE [dbo].[Course]
END
GO

BEGIN
  CREATE TABLE [dbo].[Course](
		[CourseId]    	[INT] IDENTITY(1,1) NOT NULL,
		[CourseKey]   	[NVARCHAR](50) NOT NULL,
		[CourseName]  	[NVARCHAR](50) NOT NULL,
		[Description]   [NVARCHAR](250) DEFAULT NULL,
		[ProfessorId]   [INT] DEFAULT 0, -- this is UserId
		[Created]       [DATETIME] DEFAULT CURRENT_TIMESTAMP,
		[Updated]       [DATETIME] DEFAULT CURRENT_TIMESTAMP,
		[Author]        [NVARCHAR](50) DEFAULT NULL,
		[Editor]        [NVARCHAR](50) DEFAULT NULL,
		[Deleted]       [INT] DEFAULT 0
	CONSTRAINT [PK_Course] PRIMARY KEY CLUSTERED
	(
		[CourseId] ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY]
END
GO	

-- Sample data
INSERT INTO [dbo].[Course] (CourseKey, CourseName, Description, ProfessorId, Author, Editor)
VALUES (NEWID(), 'Azure Administrator AZ-104', 'Azure Administrator AZ-104', '0', 'SYSTEM', 'SYSTEM')

INSERT INTO [dbo].[Course] (CourseKey, CourseName, Description, ProfessorId, Author, Editor)
VALUES (NEWID(), 'Azure Developer AZ-304', 'Azure Developer AZ-304', '0', 'SYSTEM', 'SYSTEM')


--
-- Table structure for table `CourseFile`
--
IF (EXISTS (SELECT * 
			FROM INFORMATION_SCHEMA.TABLES
			WHERE TABLE_CATALOG='ndemo' AND TABLE_SCHEMA = 'dbo' AND  TABLE_NAME = 'CourseFile'))
BEGIN
	DROP TABLE [dbo].[CourseFile]
END
GO

BEGIN
  CREATE TABLE [dbo].[CourseFile](
		[CourseFileId]    [INT] IDENTITY(1,1) NOT NULL,
		[CourseFileKey]   [NVARCHAR](50) NOT NULL,
		[CourseFileUrl]   [NVARCHAR](250) NOT NULL,
		[CourseId]		  [INT] DEFAULT 0,
		[Created]         [DATETIME] DEFAULT CURRENT_TIMESTAMP,
		[Updated]         [DATETIME] DEFAULT CURRENT_TIMESTAMP,
		[Author]          [NVARCHAR](50) DEFAULT NULL,
		[Editor]          [NVARCHAR](50) DEFAULT NULL
	CONSTRAINT [PK_CourseFile] PRIMARY KEY CLUSTERED
	(
		[CourseFileId] ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY]
END
GO

-- Sample data
INSERT INTO [dbo].[CourseFile] (CourseFileKey, CourseFileUrl, CourseId, Author, Editor)
VALUES (NEWID(), 'https://aws-product-images.s3.amazonaws.com/ANH_VO_DUY_CV.pdf', '1', 'SYSTEM', 'SYSTEM')

INSERT INTO [dbo].[CourseFile] (CourseFileKey, CourseFileUrl, CourseId, Author, Editor)
VALUES (NEWID(), 'https://aws-product-images.s3.amazonaws.com/ANH_VO_DUY_CV.pdf', '1', 'SYSTEM', 'SYSTEM')
