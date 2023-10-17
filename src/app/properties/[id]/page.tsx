import PropertyDetail from "@/components/PropertyDetail";
import LeaseForm from "@/components/PropertyLeaseForm";
import { ObjectId } from "mongodb";
import React from "react";

export default async function PropertyDetailPage({
  params: { id },
}: {
  params: {
    id: ObjectId;
  };
}) {
  const { property } = {
    property: {
      propertyName: "test",
      propertyAddress: "test",
      monthlyRent: 0,
      leaseApplicationFee: 0,
      reservationFee: 0,
      propertyOwner: "test",
      ownerName: "test",
      propertyImageUrl: "test",
      isLeased: false,
    },
  };

  return (
    <div className="container mx-auto max-w-7xl">
      <PropertyDetail property={property} />
      <div className="mt-8">
        {!property.isLeased ? (
          <LeaseForm property={property} />
        ) : (
          <>
            <h2 className="text-3xl font-bold mb-8 text-indigo-700">
              This property is already leased
            </h2>
          </>
        )}
      </div>
    </div>
  );
}
