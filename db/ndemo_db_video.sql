USE [ndemo];
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

--
-- Table structure for table `VideoCategory`
--
IF (EXISTS (SELECT * 
			FROM INFORMATION_SCHEMA.TABLES
			WHERE TABLE_CATALOG='ndemo' AND TABLE_SCHEMA = 'dbo' AND  TABLE_NAME = 'VideoCategory'))
BEGIN
	DROP TABLE [dbo].[VideoCategory]
END
GO

BEGIN
  CREATE TABLE [dbo].[VideoCategory](
		[VideoCategoryId]   	[INT] IDENTITY(1,1) NOT NULL,
		[VideoCategoryKey]  	[NVARCHAR](50) NOT NULL,
		[VideoCategoryName] 	[NVARCHAR](50) DEFAULT NULL,
		[VideoCategoryName_EN] 	[NVARCHAR](50) DEFAULT NULL,
		[Description]   		[NVARCHAR](50) DEFAULT NULL,
		[Description_EN]   		[NVARCHAR](50) DEFAULT NULL,
		[Created]       		[DATETIME] DEFAULT CURRENT_TIMESTAMP,
		[Updated]       		[DATETIME] DEFAULT CURRENT_TIMESTAMP,
		[Author]        		[NVARCHAR](50) DEFAULT NULL,
		[Editor]        		[NVARCHAR](50) DEFAULT NULL,
		[Deleted]       		[INT] DEFAULT 0
	CONSTRAINT [PK_VideoCategory] PRIMARY KEY CLUSTERED
	(
		[VideoCategoryId] ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY]
END
GO

-- Sample data
INSERT INTO [dbo].[VideoCategory] (VideoCategoryKey, VideoCategoryName, VideoCategoryName_EN, Description, Author, Editor)
VALUES (NEWID(), N'Phim hoạt hình', N'Cartoon', N'Phim hoạt hình', 'SYSTEM', 'SYSTEM')

INSERT INTO [dbo].[VideoCategory] (VideoCategoryKey, VideoCategoryName, VideoCategoryName_EN, Description, Author, Editor)
VALUES (NEWID(), N'Phim hành động', N'Cartoon', N'Phim hành động', 'SYSTEM', 'SYSTEM')


--
-- Table structure for table `Video`
--
IF (EXISTS (SELECT * 
			FROM INFORMATION_SCHEMA.TABLES
			WHERE TABLE_CATALOG='ndemo' AND TABLE_SCHEMA = 'dbo' AND  TABLE_NAME = 'Video'))
BEGIN
	DROP TABLE [dbo].[Video]
END
GO

BEGIN
  CREATE TABLE [dbo].[Video](
		[VideoId]    		[INT] IDENTITY(1,1) NOT NULL,
		[VideoKey]   		[NVARCHAR](50) NOT NULL,
		[VideoName]  		[NVARCHAR](50) NOT NULL,
		[VideoName_EN] 		[NVARCHAR](50) DEFAULT NULL,
		[Description]   	[NVARCHAR](500) DEFAULT NULL,
		[Description_EN]   	[NVARCHAR](500) DEFAULT NULL,
		[VideoCategoryId]   [INT] DEFAULT 0,
		[Created]       	[DATETIME] DEFAULT CURRENT_TIMESTAMP,
		[Updated]       	[DATETIME] DEFAULT CURRENT_TIMESTAMP,
		[Author]        	[NVARCHAR](50) DEFAULT NULL,
		[Editor]        	[NVARCHAR](50) DEFAULT NULL,
		[Deleted]       	[INT] DEFAULT 0
	CONSTRAINT [PK_Video] PRIMARY KEY CLUSTERED
	(
		[VideoId] ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY]
END
GO	

-- Sample data
INSERT INTO [dbo].[Video] (VideoKey, VideoName, Description, VideoCategoryId, Author, Editor)
VALUES (NEWID(), N'Business Name or Tagline', N'This is a template that is great for small businesses. It does not have too much fancy flare to it, but it makes a great use of the standard Bootstrap core components. Feel free to use this template for any project you want!', '1', 'SYSTEM', 'SYSTEM')

INSERT INTO [dbo].[Video] (VideoKey, VideoName, Description, VideoCategoryId, Author, Editor)
VALUES (NEWID(), N'Card One', N'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.', '1', 'SYSTEM', 'SYSTEM')

INSERT INTO [dbo].[Video] (VideoKey, VideoName, Description, VideoCategoryId, Author, Editor)
VALUES (NEWID(), N'Card Two', N'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod tenetur ex natus at dolorem enim! Nesciunt pariatur voluptatem sunt quam eaque, vel, non in id dolore voluptates quos eligendi labore.', '1', 'SYSTEM', 'SYSTEM')

INSERT INTO [dbo].[Video] (VideoKey, VideoName, Description, VideoCategoryId, Author, Editor)
VALUES (NEWID(), N'Card Three', N'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.', '1', 'SYSTEM', 'SYSTEM')

INSERT INTO [dbo].[Video] (VideoKey, VideoName, Description, VideoCategoryId, Author, Editor)
VALUES (NEWID(), N'God Father - Part I', N'God Father - Part I', '2', 'SYSTEM', 'SYSTEM')

INSERT INTO [dbo].[Video] (VideoKey, VideoName, Description, VideoCategoryId, Author, Editor)
VALUES (NEWID(), N'God Father - Part II', N'God Father - Part II', '2', 'SYSTEM', 'SYSTEM')

INSERT INTO [dbo].[Video] (VideoKey, VideoName, Description, VideoCategoryId, Author, Editor)
VALUES (NEWID(), N'God Father - Part III', N'God Father - Part III', '2', 'SYSTEM', 'SYSTEM')

INSERT INTO [dbo].[Video] (VideoKey, VideoName, Description, VideoCategoryId, Author, Editor)
VALUES (NEWID(), N'Abraham Lincoln', N'Abraham Lincoln', '2', 'SYSTEM', 'SYSTEM')

INSERT INTO [dbo].[Video] (VideoKey, VideoName, Description, VideoCategoryId, Author, Editor)
VALUES (NEWID(), N'Rise of Empire - Part I', N'Rise of Empire - Part I', '2', 'SYSTEM', 'SYSTEM')

INSERT INTO [dbo].[Video] (VideoKey, VideoName, Description, VideoCategoryId, Author, Editor)
VALUES (NEWID(), N'Rise of Empire - Part II', N'Rise of Empire - Part II', '2', 'SYSTEM', 'SYSTEM')


--
-- Table structure for table `VideoFile`
--
IF (EXISTS (SELECT * 
			FROM INFORMATION_SCHEMA.TABLES
			WHERE TABLE_CATALOG='ndemo' AND TABLE_SCHEMA = 'dbo' AND  TABLE_NAME = 'VideoFile'))
BEGIN
	DROP TABLE [dbo].[VideoFile]
END
GO

BEGIN
  CREATE TABLE [dbo].[VideoFile](
		[VideoFileId]    [INT] IDENTITY(1,1) NOT NULL,
		[VideoFileKey]   [NVARCHAR](50) NOT NULL,
		[VideoFileUrl]   [NVARCHAR](500) NOT NULL,
		[VideoId]		 [INT] DEFAULT 0,
		[Created]        [DATETIME] DEFAULT CURRENT_TIMESTAMP,
		[Updated]        [DATETIME] DEFAULT CURRENT_TIMESTAMP,
		[Author]         [NVARCHAR](50) DEFAULT NULL,
		[Editor]         [NVARCHAR](50) DEFAULT NULL
	CONSTRAINT [PK_VideoFile] PRIMARY KEY CLUSTERED
	(
		[VideoFileId] ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY]
END
GO

-- Sample data
INSERT INTO [dbo].[VideoFile] (VideoFileKey, VideoFileUrl, VideoId, Author, Editor)
VALUES (NEWID(), 'https://aws-product-images.s3.amazonaws.com/ANH_VO_DUY_CV.pdf', '1', 'SYSTEM', 'SYSTEM')

INSERT INTO [dbo].[VideoFile] (VideoFileKey, VideoFileUrl, VideoId, Author, Editor)
VALUES (NEWID(), 'https://aws-product-images.s3.amazonaws.com/ANH_VO_DUY_CV.pdf', '2', 'SYSTEM', 'SYSTEM')

INSERT INTO [dbo].[VideoFile] (VideoFileKey, VideoFileUrl, VideoId, Author, Editor)
VALUES (NEWID(), 'https://aws-product-images.s3.amazonaws.com/ANH_VO_DUY_CV.pdf', '3', 'SYSTEM', 'SYSTEM')

INSERT INTO [dbo].[VideoFile] (VideoFileKey, VideoFileUrl, VideoId, Author, Editor)
VALUES (NEWID(), 'https://aws-product-images.s3.amazonaws.com/ANH_VO_DUY_CV.pdf', '4', 'SYSTEM', 'SYSTEM')

INSERT INTO [dbo].[VideoFile] (VideoFileKey, VideoFileUrl, VideoId, Author, Editor)
VALUES (NEWID(), 'https://aws-product-images.s3.amazonaws.com/ANH_VO_DUY_CV.pdf', '5', 'SYSTEM', 'SYSTEM')

INSERT INTO [dbo].[VideoFile] (VideoFileKey, VideoFileUrl, VideoId, Author, Editor)
VALUES (NEWID(), 'https://aws-product-images.s3.amazonaws.com/ANH_VO_DUY_CV.pdf', '6', 'SYSTEM', 'SYSTEM')

INSERT INTO [dbo].[VideoFile] (VideoFileKey, VideoFileUrl, VideoId, Author, Editor)
VALUES (NEWID(), 'https://aws-product-images.s3.amazonaws.com/ANH_VO_DUY_CV.pdf', '7', 'SYSTEM', 'SYSTEM')

INSERT INTO [dbo].[VideoFile] (VideoFileKey, VideoFileUrl, VideoId, Author, Editor)
VALUES (NEWID(), 'https://aws-product-images.s3.amazonaws.com/ANH_VO_DUY_CV.pdf', '8', 'SYSTEM', 'SYSTEM')

INSERT INTO [dbo].[VideoFile] (VideoFileKey, VideoFileUrl, VideoId, Author, Editor)
VALUES (NEWID(), 'https://aws-product-images.s3.amazonaws.com/ANH_VO_DUY_CV.pdf', '9', 'SYSTEM', 'SYSTEM')

INSERT INTO [dbo].[VideoFile] (VideoFileKey, VideoFileUrl, VideoId, Author, Editor)
VALUES (NEWID(), 'https://aws-product-images.s3.amazonaws.com/ANH_VO_DUY_CV.pdf', '10', 'SYSTEM', 'SYSTEM')