-- CreateTable
CREATE TABLE `Image` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `storeType` VARCHAR(191) NOT NULL DEFAULT 'local',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Student` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `hearts` INTEGER NOT NULL DEFAULT 3,
    `heartsRenewAt` DATETIME(3) NULL,
    `streak` INTEGER NOT NULL DEFAULT 0,
    `streakRenewAt` DATETIME(3) NULL,
    `streakResetAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    UNIQUE INDEX `Student_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProgrammingLanguage` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `imageId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `ProgrammingLanguage_imageId_key`(`imageId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Module` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `programmingLanguageId` VARCHAR(191) NOT NULL,
    `orderNumber` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Level` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `orderNumber` INTEGER NOT NULL DEFAULT 0,
    `moduleId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StudentAnswer` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `studentId` VARCHAR(191) NOT NULL,
    `miniGameId` VARCHAR(191) NOT NULL,
    `codeOrderingMiniGameStudentAnswerId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TrueFalseMiniGameStudentAnswer` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `studentAnswerId` VARCHAR(191) NOT NULL,
    `answer` BOOLEAN NOT NULL,

    UNIQUE INDEX `TrueFalseMiniGameStudentAnswer_studentAnswerId_key`(`studentAnswerId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CodeCompletionMiniGameStudentAnswer` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `studentAnswerId` VARCHAR(191) NOT NULL,
    `answer` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `CodeCompletionMiniGameStudentAnswer_studentAnswerId_key`(`studentAnswerId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CodeOrderingMiniGameStudentAnswer` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `studentAnswerId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CodeOrderingMiniGameStudentAnswerOption` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `studentAnswerId` VARCHAR(191) NOT NULL,
    `answerOrder` INTEGER NOT NULL,
    `correctOrder` INTEGER NOT NULL,
    `codeOrderingMiniGameStudentAnswerId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MiniGame` (
    `id` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `levelId` VARCHAR(191) NOT NULL,
    `markdownMiniGameId` VARCHAR(191) NULL,
    `trueFalseMiniGameId` VARCHAR(191) NULL,
    `codeCompletionMiniGameId` VARCHAR(191) NULL,
    `codeOrderingMiniGameId` VARCHAR(191) NULL,
    `orderNumber` INTEGER NOT NULL DEFAULT 0,

    UNIQUE INDEX `MiniGame_markdownMiniGameId_key`(`markdownMiniGameId`),
    UNIQUE INDEX `MiniGame_trueFalseMiniGameId_key`(`trueFalseMiniGameId`),
    UNIQUE INDEX `MiniGame_codeCompletionMiniGameId_key`(`codeCompletionMiniGameId`),
    UNIQUE INDEX `MiniGame_codeOrderingMiniGameId_key`(`codeOrderingMiniGameId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MarkdownMiniGame` (
    `id` VARCHAR(191) NOT NULL,
    `markdown` MEDIUMTEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TrueFalseMiniGame` (
    `id` VARCHAR(191) NOT NULL,
    `question` TEXT NOT NULL,
    `correctAnswer` BOOLEAN NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CodeCompletionMiniGame` (
    `id` VARCHAR(191) NOT NULL,
    `code` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CodeOrderingMiniGame` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CodeCompletionMiniGameOption` (
    `id` VARCHAR(191) NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `isCorrect` BOOLEAN NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `codeCompletionMiniGameId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CodeOrderingMiniGameOption` (
    `id` VARCHAR(191) NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `order` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `codeOrderingMiniGameId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ProgrammingLanguage` ADD CONSTRAINT `ProgrammingLanguage_imageId_fkey` FOREIGN KEY (`imageId`) REFERENCES `Image`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Module` ADD CONSTRAINT `Module_programmingLanguageId_fkey` FOREIGN KEY (`programmingLanguageId`) REFERENCES `ProgrammingLanguage`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Level` ADD CONSTRAINT `Level_moduleId_fkey` FOREIGN KEY (`moduleId`) REFERENCES `Module`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StudentAnswer` ADD CONSTRAINT `StudentAnswer_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `Student`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StudentAnswer` ADD CONSTRAINT `StudentAnswer_miniGameId_fkey` FOREIGN KEY (`miniGameId`) REFERENCES `MiniGame`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StudentAnswer` ADD CONSTRAINT `StudentAnswer_codeOrderingMiniGameStudentAnswerId_fkey` FOREIGN KEY (`codeOrderingMiniGameStudentAnswerId`) REFERENCES `CodeOrderingMiniGameStudentAnswer`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TrueFalseMiniGameStudentAnswer` ADD CONSTRAINT `TrueFalseMiniGameStudentAnswer_studentAnswerId_fkey` FOREIGN KEY (`studentAnswerId`) REFERENCES `StudentAnswer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CodeCompletionMiniGameStudentAnswer` ADD CONSTRAINT `CodeCompletionMiniGameStudentAnswer_studentAnswerId_fkey` FOREIGN KEY (`studentAnswerId`) REFERENCES `StudentAnswer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CodeOrderingMiniGameStudentAnswerOption` ADD CONSTRAINT `CodeOrderingMiniGameStudentAnswerOption_codeOrderingMiniGam_fkey` FOREIGN KEY (`codeOrderingMiniGameStudentAnswerId`) REFERENCES `CodeOrderingMiniGameStudentAnswer`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MiniGame` ADD CONSTRAINT `MiniGame_levelId_fkey` FOREIGN KEY (`levelId`) REFERENCES `Level`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MiniGame` ADD CONSTRAINT `MiniGame_trueFalseMiniGameId_fkey` FOREIGN KEY (`trueFalseMiniGameId`) REFERENCES `TrueFalseMiniGame`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MiniGame` ADD CONSTRAINT `MiniGame_codeCompletionMiniGameId_fkey` FOREIGN KEY (`codeCompletionMiniGameId`) REFERENCES `CodeCompletionMiniGame`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MiniGame` ADD CONSTRAINT `MiniGame_codeOrderingMiniGameId_fkey` FOREIGN KEY (`codeOrderingMiniGameId`) REFERENCES `CodeOrderingMiniGame`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MiniGame` ADD CONSTRAINT `MiniGame_markdownMiniGameId_fkey` FOREIGN KEY (`markdownMiniGameId`) REFERENCES `MarkdownMiniGame`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CodeCompletionMiniGameOption` ADD CONSTRAINT `CodeCompletionMiniGameOption_codeCompletionMiniGameId_fkey` FOREIGN KEY (`codeCompletionMiniGameId`) REFERENCES `CodeCompletionMiniGame`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CodeOrderingMiniGameOption` ADD CONSTRAINT `CodeOrderingMiniGameOption_codeOrderingMiniGameId_fkey` FOREIGN KEY (`codeOrderingMiniGameId`) REFERENCES `CodeOrderingMiniGame`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
