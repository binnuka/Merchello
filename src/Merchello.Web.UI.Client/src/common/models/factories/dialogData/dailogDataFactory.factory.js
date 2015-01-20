/**
 * @ngdoc service
 * @name merchello.models.dialogDataFactory
 *
 * @description
 * A utility service that builds dialogData models
 */
angular.module('merchello.models').factory('dialogDataFactory',
    [
    function() {

        // creates dialogData object for capturing a payment
        function createCapturePaymentDialogData() {
            return new CapturePaymentDialogData();
        }

        // creates dialogData for creating a shipment
        function createCreateShipmentDialogData() {
            return new CreateShipmentDialogData();
        }

        // creates dialogData for editing ShipmentDisplay
        function createEditShipmentDialogData() {
            return new EditShipmentDialogData();
        }

        // creates dialogData for editing AddressDisplay
        function createEditAddressDialogData() {
            return new EditAddressDialogData();
        }

        // creates dialogData for adding Ship Countries
        function createAddShipCountryDialogData() {
            return new AddShipCountryDialogData();
        }

        // creates dialogData for deleting ship countries
        function createDeleteShipCountryDialogData() {
            return new DeleteShipCountryDialogData();
        }

        // creates dialogData for adding providers to ship countries
        function createAddShipCountryProviderDialogData() {
            return new AddShipCountryProviderDialogData();
        }

        // creates a dialogData for deleting ship country ship methods
        function createDeleteShipCountryShipMethodDialogData() {
            return new DeleteShipCountryShipMethodDialogData();
        }

        // creates a dialogData for editing shipping gateway methods
        function createEditShippingGatewayMethodDialogData() {
            return new EditShippingGatewayMethodDialogData();
        }

        // creates a dialogData for adding or editing warehouses
        function createAddEditWarehouseDialogData() {
            return new AddEditWarehouseDialogData();
        }

        // creates a dialogData for adding or editing warehouse catalogs
        function createAddEditWarehouseCatalogDialogData() {
            return new AddEditWarehouseCatalogDialogData();
        }

        function createDeleteWarehouseCatalogDialogData() {
            return new DeleteWarehouseCatalogDialogData();
        }

        function createChangeWarehouseCatalogDialogData() {
            return new ChangeWarehouseCatalogDialogData();
        }

        function createEditTaxCountryDialogData() {
            return new EditTaxCountryDialogData();
        }

        function createDeletePaymentMethodDialogData() {
            return new DeletePaymentMethodDialogData();
        }

        // creates a dialog data model for adding or editing a notification method
        function createAddEditNotificationMethodDialogData() {
            return new AddEditNotificationMethodDialogData();
        }

        // creates a dialog data model for deleting a notification method
        function createDeleteNotificationMethodDialogData() {
            return new DeleteNotificationMethodDialogData();
        }

        // creates a dialog data model for adding and editing a notification message
        function createAddEditNotificationMessageDialogData() {
            return new AddEditNotificationMessageDialogData();
        };

        return {
            createAddShipCountryDialogData: createAddShipCountryDialogData,
            createDeleteShipCountryDialogData: createDeleteShipCountryDialogData,
            createAddShipCountryProviderDialogData: createAddShipCountryProviderDialogData,
            createChangeWarehouseCatalogDialogData: createChangeWarehouseCatalogDialogData,
            createDeleteWarehouseCatalogDialogData: createDeleteWarehouseCatalogDialogData,
            createEditShippingGatewayMethodDialogData: createEditShippingGatewayMethodDialogData,
            createAddEditWarehouseCatalogDialogData: createAddEditWarehouseCatalogDialogData,
            createCapturePaymentDialogData: createCapturePaymentDialogData,
            createCreateShipmentDialogData: createCreateShipmentDialogData,
            createEditShipmentDialogData: createEditShipmentDialogData,
            createEditAddressDialogData: createEditAddressDialogData,
            createAddEditWarehouseDialogData: createAddEditWarehouseDialogData,
            createDeleteShipCountryShipMethodDialogData: createDeleteShipCountryShipMethodDialogData,
            createEditTaxCountryDialogData: createEditTaxCountryDialogData,
            createDeletePaymentMethodDialogData: createDeletePaymentMethodDialogData,
            createAddEditNotificationMethodDialogData: createAddEditNotificationMethodDialogData,
            createDeleteNotificationMethodDialogData: createDeleteNotificationMethodDialogData,
            createAddEditNotificationMessageDialogData: createAddEditNotificationMessageDialogData
        };
}]);
