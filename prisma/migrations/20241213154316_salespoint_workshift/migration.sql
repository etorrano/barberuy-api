-- CreateTable
CREATE TABLE "_SalesPointToWorkShift" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_SalesPointToWorkShift_AB_unique" ON "_SalesPointToWorkShift"("A", "B");

-- CreateIndex
CREATE INDEX "_SalesPointToWorkShift_B_index" ON "_SalesPointToWorkShift"("B");

-- AddForeignKey
ALTER TABLE "_SalesPointToWorkShift" ADD CONSTRAINT "_SalesPointToWorkShift_A_fkey" FOREIGN KEY ("A") REFERENCES "SalesPoint"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SalesPointToWorkShift" ADD CONSTRAINT "_SalesPointToWorkShift_B_fkey" FOREIGN KEY ("B") REFERENCES "WorkShift"("id") ON DELETE CASCADE ON UPDATE CASCADE;
