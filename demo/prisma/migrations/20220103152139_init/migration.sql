-- CreateTable
CREATE TABLE "Note" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createDate" TEXT
);

-- CreateTable
CREATE TABLE "NoteAttributes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "noteId" TEXT NOT NULL,
    "important" INTEGER,
    "pinned" INTEGER,
    "updateDate" TEXT
);

-- CreateTable
CREATE TABLE "NoteChangeLog" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "noteId" TEXT NOT NULL,
    "operation" TEXT NOT NULL,
    "changeDate" TEXT
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "tagName" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "NoteOnTag" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "noteId" TEXT NOT NULL,
    "tagId" TEXT NOT NULL,
    "createdAt" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "NoteAttributes.id_noteId_unique" ON "NoteAttributes"("id", "noteId");

-- CreateIndex
CREATE UNIQUE INDEX "NoteOnTag.noteId_tagId_unique" ON "NoteOnTag"("noteId", "tagId");
