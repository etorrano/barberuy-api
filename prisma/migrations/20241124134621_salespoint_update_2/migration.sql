-- CreateTable
CREATE TABLE "_SalesPointToStaff" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_SalesPointToStaff_AB_unique" ON "_SalesPointToStaff"("A", "B");

-- CreateIndex
CREATE INDEX "_SalesPointToStaff_B_index" ON "_SalesPointToStaff"("B");

-- AddForeignKey
ALTER TABLE "_SalesPointToStaff" ADD CONSTRAINT "_SalesPointToStaff_A_fkey" FOREIGN KEY ("A") REFERENCES "SalesPoint"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SalesPointToStaff" ADD CONSTRAINT "_SalesPointToStaff_B_fkey" FOREIGN KEY ("B") REFERENCES "Staff"("id") ON DELETE CASCADE ON UPDATE CASCADE;
