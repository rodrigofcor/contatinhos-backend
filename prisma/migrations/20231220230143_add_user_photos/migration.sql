-- CreateTable
CREATE TABLE "Photos" (
    "id" TEXT NOT NULL,
    "orderNumber" INTEGER NOT NULL,
    "photoPath" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Photos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Photos" ADD CONSTRAINT "Photos_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
