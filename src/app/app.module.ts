import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgApexchartsModule } from "ng-apexcharts";
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TagInputModule } from 'ngx-chips';
import { FullCalendarModule } from '@fullcalendar/angular';
import { LightgalleryModule } from 'lightgallery/angular';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { ColorPickerModule } from 'ngx-color-picker';
import { ToastrModule } from 'ngx-toastr';
import { SwiperModule } from 'swiper/angular';
import { Select2Module } from 'ng-select2-component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Material UI --
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRippleModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DatePipe } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { MatTreeModule } from '@angular/material/tree';


//mat component--
import { DzmtAutocompleteComponent } from './components/material/dzmt-autocomplete/dzmt-autocomplete.component';
import { DzmtAutocompleteFirstActiveComponent } from './components/material/dzmt-autocomplete/dzmt-autocomplete-first-active/dzmt-autocomplete-first-active.component';
import { DzmtAutocompleteDisplayComponent } from './components/material/dzmt-autocomplete/dzmt-autocomplete-display/dzmt-autocomplete-display.component';
import { DzmtAutocompleteFilterComponent } from './components/material/dzmt-autocomplete/dzmt-autocomplete-filter/dzmt-autocomplete-filter.component';
import { DzmtAutocompleteOptgroupComponent } from './components/material/dzmt-autocomplete/dzmt-autocomplete-optgroup/dzmt-autocomplete-optgroup.component';
import { DzmtAutocompleteOverviewComponent } from './components/material/dzmt-autocomplete/dzmt-autocomplete-overview/dzmt-autocomplete-overview.component';
import { DzmtAutocompletePlaneComponent } from './components/material/dzmt-autocomplete/dzmt-autocomplete-plane/dzmt-autocomplete-plane.component';
import { DzmtAutocompleteSimpleComponent } from './components/material/dzmt-autocomplete/dzmt-autocomplete-simple/dzmt-autocomplete-simple.component';
import { DzmtBadgeComponent } from './components/material/dzmt-badge/dzmt-badge.component';
import { DzmtBottomSheetComponent } from './components/material/dzmt-bottom-sheet/dzmt-bottom-sheet.component';
import { DzmtButtonComponent } from './components/material/dzmt-button/dzmt-button.component';
import { DzmtButtonBasicComponent } from './components/material/dzmt-button/dzmt-button-basic/dzmt-button-basic.component';
import { DzmtButtonVarietiesComponent } from './components/material/dzmt-button/dzmt-button-varieties/dzmt-button-varieties.component';
import { DzmtButtonTonggleComponent } from './components/material/dzmt-button-tonggle/dzmt-button-tonggle.component';
import { ButtonToggleAppearanceComponent } from './components/material/dzmt-button-tonggle/button-toggle-appearance/button-toggle-appearance.component';
import { ButtonExclusiveSelectionComponent } from './components/material/dzmt-button-tonggle/button-exclusive-selection/button-exclusive-selection.component';
import { ButtonWithFormsComponent } from './components/material/dzmt-button-tonggle/button-with-forms/button-with-forms.component';
import { ButtonBasicTogglesComponent } from './components/material/dzmt-button-tonggle/button-basic-toggles/button-basic-toggles.component';
import { DzmtCardComponent } from './components/material/dzmt-card/dzmt-card.component';
import { CardMultipleSectionsComponent } from './components/material/dzmt-card/card-multiple-sections/card-multiple-sections.component';
import { CardBasicComponent } from './components/material/dzmt-card/card-basic/card-basic.component';
import { DzmtCheckboxComponent } from './components/material/dzmt-checkbox/dzmt-checkbox.component';
import { ConfigurableCheckboxComponent } from './components/material/dzmt-checkbox/configurable-checkbox/configurable-checkbox.component';
import { BasicCheckboxComponent } from './components/material/dzmt-checkbox/basic-checkbox/basic-checkbox.component';
import { DzmtChipsComponent } from './components/material/dzmt-chips/dzmt-chips.component';
import { ChipsAutocompleteComponent } from './components/material/dzmt-chips/chips-autocomplete/chips-autocomplete.component';
import { ChipsDragDropComponent } from './components/material/dzmt-chips/chips-drag-drop/chips-drag-drop.component';
import { ChipsWithInputComponent } from './components/material/dzmt-chips/chips-with-input/chips-with-input.component';
import { ChipsBasicComponent } from './components/material/dzmt-chips/chips-basic/chips-basic.component';
import { ChipsStackedComponent } from './components/material/dzmt-chips/chips-stacked/chips-stacked.component';
import { DzmtDatepickerComponent } from './components/material/dzmt-datepicker/dzmt-datepicker.component';
import { ComparisonRangesComponent } from './components/material/dzmt-datepicker/comparison-ranges/comparison-ranges.component';
import { FormsIntegrationComponent } from './components/material/dzmt-datepicker/forms-integration/forms-integration.component';
import { BasicDateRangeComponent } from './components/material/dzmt-datepicker/basic-date-range/basic-date-range.component';
import { RangeCustomSelectionStrategyComponent } from './components/material/dzmt-datepicker/range-custom-selection-strategy/range-custom-selection-strategy.component';
import { DatepickerActionButtonsComponent } from './components/material/dzmt-datepicker/datepicker-action-buttons/datepicker-action-buttons.component';
import { DatepickerOpenMethodComponent } from './components/material/dzmt-datepicker/datepicker-open-method/datepicker-open-method.component';
import { DatepickerPaletteColorsComponent } from './components/material/dzmt-datepicker/datepicker-palette-colors/datepicker-palette-colors.component';
import { DatepickerCustomCalendarHeaderComponent } from './components/material/dzmt-datepicker/datepicker-custom-calendar-header/datepicker-custom-calendar-header.component';
import { DatepickerCustomDateClassesComponent } from './components/material/dzmt-datepicker/datepicker-custom-date-classes/datepicker-custom-date-classes.component';
import { DisabledDatepickerComponent } from './components/material/dzmt-datepicker/disabled-datepicker/disabled-datepicker.component';
import { InputChangeEventsComponent } from './components/material/dzmt-datepicker/input-change-events/input-change-events.component';
import { DatepickerFilterValidationComponent } from './components/material/dzmt-datepicker/datepicker-filter-validation/datepicker-filter-validation.component';
import { DatepickerMinMaxValidationComponent } from './components/material/dzmt-datepicker/datepicker-min-max-validation/datepicker-min-max-validation.component';
import { BasicDatepickerComponent } from './components/material/dzmt-datepicker/basic-datepicker/basic-datepicker.component';
import { DatepickerStartDateComponent } from './components/material/dzmt-datepicker/datepicker-start-date/datepicker-start-date.component';
import { DatepickerTouchUiComponent } from './components/material/dzmt-datepicker/datepicker-touch-ui/datepicker-touch-ui.component';
import { DatepickerSelectedValueComponent } from './components/material/dzmt-datepicker/datepicker-selected-value/datepicker-selected-value.component';
import { DzmtDialogComponent } from './components/material/dzmt-dialog/dzmt-dialog.component';
import { HeaderScrollbarActionComponent } from './components/material/dzmt-dialog/header-scrollbar-action/header-scrollbar-action.component';
import { InjectingDataComponent } from './components/material/dzmt-dialog/injecting-data/injecting-data.component';
import { DialogElementsComponent } from './components/material/dzmt-dialog/dialog-elements/dialog-elements.component';
import { DialogFromMenuComponent } from './components/material/dzmt-dialog/dialog-from-menu/dialog-from-menu.component';
import { DialogOverviewComponent } from './components/material/dzmt-dialog/dialog-overview/dialog-overview.component';
import { DzmtDividerComponent } from './components/material/dzmt-divider/dzmt-divider.component';
import { DzmtExpansionComponent } from './components/material/dzmt-expansion/dzmt-expansion.component';
import { ExpandCollapseAllTogglesComponent } from './components/material/dzmt-expansion/expand-collapse-all-toggles/expand-collapse-all-toggles.component';
import { BasicExpansionPanelComponent } from './components/material/dzmt-expansion/basic-expansion-panel/basic-expansion-panel.component';
import { ExpansionAsAccordionComponent } from './components/material/dzmt-expansion/expansion-as-accordion/expansion-as-accordion.component';
import { DzmtFormFieldComponent } from './components/material/dzmt-form-field/dzmt-form-field.component';
import { AppearanceVariantsComponent } from './components/material/dzmt-form-field/appearance-variants/appearance-variants.component';
import { FieldWithErrorMessagesComponent } from './components/material/dzmt-form-field/field-with-error-messages/field-with-error-messages.component';
import { FieldWithHintsComponent } from './components/material/dzmt-form-field/field-with-hints/field-with-hints.component';
import { FieldWithLabelComponent } from './components/material/dzmt-form-field/field-with-label/field-with-label.component';
import { SimpleFormFieldComponent } from './components/material/dzmt-form-field/simple-form-field/simple-form-field.component';
import { FieldWithPrefixSuffixComponent } from './components/material/dzmt-form-field/field-with-prefix-suffix/field-with-prefix-suffix.component';
import { FieldThemingComponent } from './components/material/dzmt-form-field/field-theming/field-theming.component';
import { DzmtGridListComponent } from './components/material/dzmt-grid-list/dzmt-grid-list.component';
import { DynamicGridListComponent } from './components/material/dzmt-grid-list/dynamic-grid-list/dynamic-grid-list.component';
import { BasicGridListComponent } from './components/material/dzmt-grid-list/basic-grid-list/basic-grid-list.component';
import { DzmtIconComponent } from './components/material/dzmt-icon/dzmt-icon.component';
import { SvgIconComponent } from './components/material/dzmt-icon/svg-icon/svg-icon.component';
import { DzmtInputComponent } from './components/material/dzmt-input/dzmt-input.component';
import { InputWithClearButtonComponent } from './components/material/dzmt-input/input-with-clear-button/input-with-clear-button.component';
import { InputErrorStateMatcherComponent } from './components/material/dzmt-input/input-error-state-matcher/input-error-state-matcher.component';
import { InputWithErrorMessageComponent } from './components/material/dzmt-input/input-with-error-message/input-with-error-message.component';
import { InputWithPrefixesSuffixesComponent } from './components/material/dzmt-input/input-with-prefixes-suffixes/input-with-prefixes-suffixes.component';
import { InputWithHintsComponent } from './components/material/dzmt-input/input-with-hints/input-with-hints.component';
import { InputBasicComponent } from './components/material/dzmt-input/input-basic/input-basic.component';
import { InputInFormComponent } from './components/material/dzmt-input/input-in-form/input-in-form.component';
import { DzmtListComponent } from './components/material/dzmt-list/dzmt-list.component';
import { BasicListComponent } from './components/material/dzmt-list/basic-list/basic-list.component';
import { ListWithSectionsComponent } from './components/material/dzmt-list/list-with-sections/list-with-sections.component';
import { ListWithSelectionComponent } from './components/material/dzmt-list/list-with-selection/list-with-selection.component';
import { ListWithSingleSelectionComponent } from './components/material/dzmt-list/list-with-single-selection/list-with-single-selection.component';
import { DzmtMenuComponent } from './components/material/dzmt-menu/dzmt-menu.component';
import { MenuWithIconsComponent } from './components/material/dzmt-menu/menu-with-icons/menu-with-icons.component';
import { NestedMenuComponent } from './components/material/dzmt-menu/nested-menu/nested-menu.component';
import { BasicMenuComponent } from './components/material/dzmt-menu/basic-menu/basic-menu.component';
import { MenuPositioningComponent } from './components/material/dzmt-menu/menu-positioning/menu-positioning.component';
import { DzmtPaginatorComponent } from './components/material/dzmt-paginator/dzmt-paginator.component';
import { ConfigurablePaginatorComponent } from './components/material/dzmt-paginator/configurable-paginator/configurable-paginator.component';
import { BasicPaginatorComponent } from './components/material/dzmt-paginator/basic-paginator/basic-paginator.component';
import { DzmtProgressBarComponent } from './components/material/dzmt-progress-bar/dzmt-progress-bar.component';
import { ConfigurableProgressBarComponent } from './components/material/dzmt-progress-bar/configurable-progress-bar/configurable-progress-bar.component';
import { BufferProgressBarComponent } from './components/material/dzmt-progress-bar/buffer-progress-bar/buffer-progress-bar.component';
import { DeterminateProgressBarComponent } from './components/material/dzmt-progress-bar/determinate-progress-bar/determinate-progress-bar.component';
import { IndeterminateProgressBarComponent } from './components/material/dzmt-progress-bar/indeterminate-progress-bar/indeterminate-progress-bar.component';
import { QueryProgressBarComponent } from './components/material/dzmt-progress-bar/query-progress-bar/query-progress-bar.component';
import { DzmtProgressSpinnerComponent } from './components/material/dzmt-progress-spinner/dzmt-progress-spinner.component';
import { ConfigurableProgressSpinnerComponent } from './components/material/dzmt-progress-spinner/configurable-progress-spinner/configurable-progress-spinner.component';
import { BasicProgressSpinnerComponent } from './components/material/dzmt-progress-spinner/basic-progress-spinner/basic-progress-spinner.component';
import { DzmtRadioComponent } from './components/material/dzmt-radio/dzmt-radio.component';
import { RadiosWithNgModelComponent } from './components/material/dzmt-radio/radios-with-ng-model/radios-with-ng-model.component';
import { RadiosBasicComponent } from './components/material/dzmt-radio/radios-basic/radios-basic.component';
import { DzmtRippleComponent } from './components/material/dzmt-ripple/dzmt-ripple.component';
import { DzmtSelectComponent } from './components/material/dzmt-select/dzmt-select.component';
import { CustomTriggerTextComponent } from './components/material/dzmt-select/custom-trigger-text/custom-trigger-text.component';
import { DisabledSelectComponent } from './components/material/dzmt-select/disabled-select/disabled-select.component';
import { CustomErrorStateMatcherComponent } from './components/material/dzmt-select/custom-error-state-matcher/custom-error-state-matcher.component';
import { SelectInFormComponent } from './components/material/dzmt-select/select-in-form/select-in-form.component';
import { SelectFormFieldFeaturesComponent } from './components/material/dzmt-select/select-form-field-features/select-form-field-features.component';
import { InitialValueNoFormComponent } from './components/material/dzmt-select/initial-value-no-form/initial-value-no-form.component';
import { MultipleSelectionComponent } from './components/material/dzmt-select/multiple-selection/multiple-selection.component';
import { NoOptionRippleComponent } from './components/material/dzmt-select/no-option-ripple/no-option-ripple.component';
import { OptionGroupsComponent } from './components/material/dzmt-select/option-groups/option-groups.component';
import { BasicSelectComponent } from './components/material/dzmt-select/basic-select/basic-select.component';
import { CustomPanelStylingComponent } from './components/material/dzmt-select/custom-panel-styling/custom-panel-styling.component';
import { SelectInReactiveFormComponent } from './components/material/dzmt-select/select-in-reactive-form/select-in-reactive-form.component';
import { SelectWithResetOptionComponent } from './components/material/dzmt-select/select-with-reset-option/select-with-reset-option.component';
import { TwoWayValueBindingComponent } from './components/material/dzmt-select/two-way-value-binding/two-way-value-binding.component';
import { DzmtSidenavComponent } from './components/material/dzmt-sidenav/dzmt-sidenav.component';
import { AutosizeSidenavComponent } from './components/material/dzmt-sidenav/autosize-sidenav/autosize-sidenav.component';
import { DrawerExplicitBackdropSettingComponent } from './components/material/dzmt-sidenav/drawer-explicit-backdrop-setting/drawer-explicit-backdrop-setting.component';
import { DzmtSlideToggleComponent } from './components/material/dzmt-slide-toggle/dzmt-slide-toggle.component';
import { ConfigurableSlideToggleComponent } from './components/material/dzmt-slide-toggle/configurable-slide-toggle/configurable-slide-toggle.component';
import { SlideToggleWithFormsComponent } from './components/material/dzmt-slide-toggle/slide-toggle-with-forms/slide-toggle-with-forms.component';
import { SlideToggleBasicComponent } from './components/material/dzmt-slide-toggle/slide-toggle-basic/slide-toggle-basic.component';
import { DzmtSliderComponent } from './components/material/dzmt-slider/dzmt-slider.component';
import { ConfigurableSliderComponent } from './components/material/dzmt-slider/configurable-slider/configurable-slider.component';
import { SliderBasicComponent } from './components/material/dzmt-slider/slider-basic/slider-basic.component';
import { ValueSliderComponent } from './components/material/dzmt-slider/value-slider/value-slider.component';
import { CustomThumbLabelFormattingComponent } from './components/material/dzmt-slider/custom-thumb-label-formatting/custom-thumb-label-formatting.component';
import { DzmtSnackBarComponent } from './components/material/dzmt-snack-bar/dzmt-snack-bar.component';
import { SnackBarCustomComponentComponent } from './components/material/dzmt-snack-bar/snack-bar-custom-component/snack-bar-custom-component.component';
import { BasicSnackBarComponent } from './components/material/dzmt-snack-bar/basic-snack-bar/basic-snack-bar.component';
import { SnackBarConfigurableComponent } from './components/material/dzmt-snack-bar/snack-bar-configurable/snack-bar-configurable.component';
import { DzmtSortComponent } from './components/material/dzmt-sort/dzmt-sort.component';
import { DzmtStepperComponent } from './components/material/dzmt-stepper/dzmt-stepper.component';
import { EditableStepsComponent } from './components/material/dzmt-stepper/editable-steps/editable-steps.component';
import { DisplaysErrorsInStepsComponent } from './components/material/dzmt-stepper/displays-errors-in-steps/displays-errors-in-steps.component';
import { LabelBottomPositionComponent } from './components/material/dzmt-stepper/label-bottom-position/label-bottom-position.component';
import { OptionalStepsComponent } from './components/material/dzmt-stepper/optional-steps/optional-steps.component';
import { StepperOverviewComponent } from './components/material/dzmt-stepper/stepper-overview/stepper-overview.component';
import { StepperCustomizedStatesComponent } from './components/material/dzmt-stepper/stepper-customized-states/stepper-customized-states.component';
import { StepperVerticalComponent } from './components/material/dzmt-stepper/stepper-vertical/stepper-vertical.component';
import { StepperAnimationsComponent } from './components/material/dzmt-stepper/stepper-animations/stepper-animations.component';
import { StepperHeaderPositionComponent } from './components/material/dzmt-stepper/stepper-header-position/stepper-header-position.component';
import { CustomStepperComponent } from './components/material/dzmt-stepper/custom-stepper/custom-stepper.component';
import { DzmtTableComponent } from './components/material/dzmt-table/dzmt-table.component';
import { BasicTableComponent } from './components/material/dzmt-table/basic-table/basic-table.component';
import { DynamicallyChangingColumnsDisplayedComponent } from './components/material/dzmt-table/dynamically-changing-columns-displayed/dynamically-changing-columns-displayed.component';
import { TableExpandableRowsComponent } from './components/material/dzmt-table/table-expandable-rows/table-expandable-rows.component';
import { TableWithFilteringComponent } from './components/material/dzmt-table/table-with-filtering/table-with-filtering.component';
import { TableWithDisplayFlexComponent } from './components/material/dzmt-table/table-with-display-flex/table-with-display-flex.component';
import { FooterRowTableComponent } from './components/material/dzmt-table/footer-row-table/footer-row-table.component';
import { MultipleHeaderFooterRowsComponent } from './components/material/dzmt-table/multiple-header-footer-rows/multiple-header-footer-rows.component';
import { DataTableSortingPaginationFilteringComponent } from './components/material/dzmt-table/data-table-sorting-pagination-filtering/data-table-sorting-pagination-filtering.component';
import { TableWithPaginationComponent } from './components/material/dzmt-table/table-with-pagination/table-with-pagination.component';
import { TableWithReOrderableColumnsComponent } from './components/material/dzmt-table/table-with-re-orderable-columns/table-with-re-orderable-columns.component';
import { TableContextPropertiesComponent } from './components/material/dzmt-table/table-context-properties/table-context-properties.component';
import { TableWithSelectionComponent } from './components/material/dzmt-table/table-with-selection/table-with-selection.component';
import { TableWithSortingComponent } from './components/material/dzmt-table/table-with-sorting/table-with-sorting.component';
import { TableWithStickyColumnsComponent } from './components/material/dzmt-table/table-with-sticky-columns/table-with-sticky-columns.component';
import { TableFlexWithToggleAbleStickyHeadersFootersColumnsComponent } from './components/material/dzmt-table/table-flex-with-toggle-able-sticky-headers-footers-columns/table-flex-with-toggle-able-sticky-headers-footers-columns.component';
import { TableStickyFooterComponent } from './components/material/dzmt-table/table-sticky-footer/table-sticky-footer.component';
import { TableStickyHeaderComponent } from './components/material/dzmt-table/table-sticky-header/table-sticky-header.component';
import { TableWithConfigurationsInterfaceComponent } from './components/material/dzmt-table/table-with-configurations-interface/table-with-configurations-interface.component';
import { TableWithSimpleTextHeaderFooterComponent } from './components/material/dzmt-table/table-with-simple-text-header-footer/table-with-simple-text-header-footer.component';
import { DzmtTabsComponent } from './components/material/dzmt-tabs/dzmt-tabs.component';
import { AlignedLabelsComponent } from './components/material/dzmt-tabs/aligned-labels/aligned-labels.component';
import { TabGroupAnimationsComponent } from './components/material/dzmt-tabs/tab-group-animations/tab-group-animations.component';
import { AsynchronouslyLoadingTabContentsComponent } from './components/material/dzmt-tabs/asynchronously-loading-tab-contents/asynchronously-loading-tab-contents.component';
import { BasicTabGroupComponent } from './components/material/dzmt-tabs/basic-tab-group/basic-tab-group.component';
import { TabsWithCustomLabelTemplateComponent } from './components/material/dzmt-tabs/tabs-with-custom-label-template/tabs-with-custom-label-template.component';
import { TabsWithDynamicHeightComponent } from './components/material/dzmt-tabs/tabs-with-dynamic-height/tabs-with-dynamic-height.component';
import { TabsWithHeadersOnBottomComponent } from './components/material/dzmt-tabs/tabs-with-headers-on-bottom/tabs-with-headers-on-bottom.component';
import { TabsWithContentLoadedLazilyComponent } from './components/material/dzmt-tabs/tabs-with-content-loaded-lazily/tabs-with-content-loaded-lazily.component';
import { TabsWithStretchedLabelsComponent } from './components/material/dzmt-tabs/tabs-with-stretched-labels/tabs-with-stretched-labels.component';
import { TabsWithThemeOptionsComponent } from './components/material/dzmt-tabs/tabs-with-theme-options/tabs-with-theme-options.component';
import { BasicUseOfTabNavBarComponent } from './components/material/dzmt-tabs/basic-use-of-tab-nav-bar/basic-use-of-tab-nav-bar.component';
import { DzmtToolbarComponent } from './components/material/dzmt-toolbar/dzmt-toolbar.component';
import { BasicToolbarComponent } from './components/material/dzmt-toolbar/basic-toolbar/basic-toolbar.component';
import { MultiRowToolbarComponent } from './components/material/dzmt-toolbar/multi-row-toolbar/multi-row-toolbar.component';
import { ToolbarOverviewComponent } from './components/material/dzmt-toolbar/toolbar-overview/toolbar-overview.component';
import { DzmtTooltipComponent } from './components/material/dzmt-tooltip/dzmt-tooltip.component';
import { TooltipAutoHidingComponent } from './components/material/dzmt-tooltip/tooltip-auto-hiding/tooltip-auto-hiding.component';
import { TooltipWithShowHideDelayComponent } from './components/material/dzmt-tooltip/tooltip-with-show-hide-delay/tooltip-with-show-hide-delay.component';
import { TooltipWithCustomClassComponent } from './components/material/dzmt-tooltip/tooltip-with-custom-class/tooltip-with-custom-class.component';
import { TooltipCanBeDisabledComponent } from './components/material/dzmt-tooltip/tooltip-can-be-disabled/tooltip-can-be-disabled.component';
import { TooltipManuallyShowHideComponent } from './components/material/dzmt-tooltip/tooltip-manually-show-hide/tooltip-manually-show-hide.component';
import { TooltipWithChangingMessageComponent } from './components/material/dzmt-tooltip/tooltip-with-changing-message/tooltip-with-changing-message.component';
import { TooltipWithHideShowDelayComponent } from './components/material/dzmt-tooltip/tooltip-with-hide-show-delay/tooltip-with-hide-show-delay.component';
import { BasicTooltipComponent } from './components/material/dzmt-tooltip/basic-tooltip/basic-tooltip.component';
import { TooltipWithCustomPositionComponent } from './components/material/dzmt-tooltip/tooltip-with-custom-position/tooltip-with-custom-position.component';
import { DzmtTreeComponent } from './components/material/dzmt-tree/dzmt-tree.component';
import { TreeWithCheckboxesComponent } from './components/material/dzmt-tree/tree-with-checkboxes/tree-with-checkboxes.component';
import { TreeWithDynamicDataComponent } from './components/material/dzmt-tree/tree-with-dynamic-data/tree-with-dynamic-data.component';
import { TreeWithFlatNodesComponent } from './components/material/dzmt-tree/tree-with-flat-nodes/tree-with-flat-nodes.component';
import { TreeWithPartiallyLoadedDataComponent } from './components/material/dzmt-tree/tree-with-partially-loaded-data/tree-with-partially-loaded-data.component';
import { TreeWithNestedNodesComponent } from './components/material/dzmt-tree/tree-with-nested-nodes/tree-with-nested-nodes.component';

// Components --
import { AdminComponent } from './layout/admin/admin.component';
import { FooterComponent } from './layout/nav/footer/footer.component';
import { HeaderComponent } from './layout/nav/header/header.component';
import { NavHeaderComponent } from './layout/nav/nav-header/nav-header.component';
import { NavigationComponent } from './layout/nav/navigation/navigation.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ChatBoxComponent } from './elements/chat-box/chat-box.component';
import { MyWalletComponent } from './pages/my-wallet/my-wallet.component';
import { InvoicesComponent } from './pages/invoices/invoices.component';
import { CardsCenterComponent } from './pages/cards-center/cards-center.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { TransactionsDetailsComponent } from './pages/transactions-details/transactions-details.component';
import { ContentComponent } from './pages/cms/content/content.component';
import { OrangeCardComponent } from './elements/card/orange-card/orange-card.component';
import { MainCardComponent } from './elements/card/main-card/main-card.component';
import { PurpleCardComponent } from './elements/card/purple-card/purple-card.component';
import { GreenCardComponent } from './elements/card/green-card/green-card.component';
import { TransactionOverviewComponent } from './elements/dashboard/transaction-overview/transaction-overview.component';
import { QuickTransferComponent } from './elements/dashboard/quick-transfer/quick-transfer.component';
import { SpendingsComponent } from './elements/dashboard/spendings/spendings.component';
import { PreviousTransactionsComponent } from './elements/dashboard/previous-transactions/previous-transactions.component';
import { WeeklyWalletUsageComponent } from './elements/dashboard/weekly-wallet-usage/weekly-wallet-usage.component';
import { OutomeComponent } from './elements/dashboard/outome/outome.component';
import { IncomeComponent } from './elements/dashboard/income/income.component';
import { LimitComponent } from './elements/dashboard/limit/limit.component';
import { MainBalanceWolletComponent } from './elements/my-wallet/main-balance-wollet/main-balance-wollet.component';
import { PaymentHistoryComponent } from './elements/my-wallet/payment-history/payment-history.component';
import { InvoicesSentComponent } from './elements/my-wallet/invoices-sent/invoices-sent.component';
import { PaymentTableComponent } from './elements/invoices/payment-table/payment-table.component';
import { CustomPaginationComponent } from './elements/widget/custom-pagination/custom-pagination.component';
import { CustomDropdownComponent } from './elements/widget/custom-dropdown/custom-dropdown.component';
import { CardListComponent } from './elements/cards-center/card-list/card-list.component';
import { CardStatisticComponent } from './elements/cards-center/card-statistic/card-statistic.component';
import { CardDemoCarouselComponent } from './elements/cards-center/card-demo-carousel/card-demo-carousel.component';
import { MainCardDbComponent } from './elements/dashboard/main-card-db/main-card-db.component';
import { HeadTransactionComponent } from './elements/transactions/head-transaction/head-transaction.component';
import { TransactionListComponent } from './elements/transactions/transaction-list/transaction-list.component';
import { DetailsPaymentIdComponent } from './elements/transactions/details-payment-id/details-payment-id.component';
import { DetailsStatisticComponent } from './elements/transactions/details-statistic/details-statistic.component';
import { BarChartApexComponent } from './elements/widget/custom-charts/bar-chart-apex/bar-chart-apex.component';
import { PieChartApexComponent } from './elements/widget/custom-charts/pie-chart-apex/pie-chart-apex.component';
import { AreaChartApexComponent } from './elements/widget/custom-charts/area-chart-apex/area-chart-apex.component';
import { FilterHeadComponent } from './elements/cms/filter-head/filter-head.component';
import { ContentAddComponent } from './pages/cms/content-add/content-add.component';
import { EmailAddComponent } from './pages/cms/email-add/email-add.component';
import { EmailTemplateComponent } from './pages/cms/email-template/email-template.component';
import { MenusComponent } from './pages/cms/menus/menus.component';
import { BlogComponent } from './pages/cms/blog/blog.component';
import { BlogAddComponent } from './pages/cms/blog-add/blog-add.component';
import { BlogCategoryComponent } from './pages/cms/blog-category/blog-category.component';
import { ProfileComponent } from './pages/apps/profile/profile.component';
import { EditProfileComponent } from './pages/apps/edit-profile/edit-profile.component';
import { PostDetailsComponent } from './pages/apps/post-details/post-details.component';
import { ComposeComponent } from './pages/apps/email/compose/compose.component';
import { InboxComponent } from './pages/apps/email/inbox/inbox.component';
import { ReadComponent } from './pages/apps/email/read/read.component';
import { CheckoutComponent } from './pages/apps/shop/checkout/checkout.component';
import { EcomCustomersComponent } from './pages/apps/shop/ecom-customers/ecom-customers.component';
import { InvoiceComponent } from './pages/apps/shop/invoice/invoice.component';
import { OrderComponent } from './pages/apps/shop/order/order.component';
import { ProductDetailComponent } from './pages/apps/shop/product-detail/product-detail.component';
import { ProductGridComponent } from './pages/apps/shop/product-grid/product-grid.component';
import { ProductListComponent } from './pages/apps/shop/product-list/product-list.component';
import { CalenderComponent } from './pages/apps/calender/calender.component';
import { EmailSidbarComponent } from './elements/apps/email-sidbar/email-sidbar.component';
import { ProfileCardComponent } from './elements/apps/profile-card/profile-card.component';
import { ProfileSidMenuComponent } from './elements/apps/profile-sid-menu/profile-sid-menu.component';
import { ProfilePostContentComponent } from './elements/apps/profile-post-content/profile-post-content.component';
import { LightGalleryComponent } from './plugins/light-gallery/light-gallery.component';
import { PostDetailContentComponent } from './elements/apps/post-detail-content/post-detail-content.component';
import { OwlCarouselComponent } from './elements/apps/owl-carousel/owl-carousel.component';
import { FlatIconsComponent } from './pages/icons/flat-icons/flat-icons.component';
import { EditorComponent } from './pages/forms/editor/editor.component';
import { FormValidationsComponent } from './pages/forms/form-validations/form-validations.component';
import { PickersComponent } from './pages/forms/pickers/pickers.component';
import { DatePickerComponent } from './pages/forms/pickers/date-picker/date-picker.component';
import { TimePickerComponent } from './pages/forms/pickers/time-picker/time-picker.component';
import { ColorPickerComponent } from './pages/forms/pickers/color-picker/color-picker.component';
import { Date1Component } from './pages/forms/pickers/date-picker/date1/date1.component';
import { Date2Component } from './pages/forms/pickers/date-picker/date2/date2.component';
import { Date3Component } from './pages/forms/pickers/date-picker/date3/date3.component';
import { ElementsComponent } from './pages/forms/elements/elements.component';
import { InputStyleComponent } from './pages/forms/elements/input-style/input-style.component';
import { CheckboxComponent } from './pages/forms/elements/checkbox/checkbox.component';
import { TextareaComponent } from './pages/forms/elements/textarea/textarea.component';
import { InputSizeComponent } from './pages/forms/elements/input-size/input-size.component';
import { SelectSizeComponent } from './pages/forms/elements/select-size/select-size.component';
import { SelectListComponent } from './pages/forms/elements/select-list/select-list.component';
import { HorizontalFormComponent } from './pages/forms/elements/horizontal-form/horizontal-form.component';
import { VerticalFormComponent } from './pages/forms/elements/vertical-form/vertical-form.component';
import { CheckboxesComponent } from './pages/forms/elements/checkboxes/checkboxes.component';
import { InlineCheckboxesComponent } from './pages/forms/elements/inline-checkboxes/inline-checkboxes.component';
import { RadioButtonsComponent } from './pages/forms/elements/radio-buttons/radio-buttons.component';
import { InlineRadioComponent } from './pages/forms/elements/inline-radio/inline-radio.component';
import { ReadonlyComponent } from './pages/forms/elements/readonly/readonly.component';
import { InlineFormComponent } from './pages/forms/elements/inline-form/inline-form.component';
import { FormGridComponent } from './pages/forms/elements/form-grid/form-grid.component';
import { FormRowComponent } from './pages/forms/elements/form-row/form-row.component';
import { FormLabelSizeComponent } from './pages/forms/elements/form-label-size/form-label-size.component';
import { ColumnSizeComponent } from './pages/forms/elements/column-size/column-size.component';
import { AutoSizingComponent } from './pages/forms/elements/auto-sizing/auto-sizing.component';
import { CustomSelectComponent } from './pages/forms/elements/custom-select/custom-select.component';
import { DisabledFormsComponent } from './pages/forms/elements/disabled-forms/disabled-forms.component';
import { InputGroupComponent } from './pages/forms/elements/input-group/input-group.component';
import { InputGroupSizeComponent } from './pages/forms/elements/input-group-size/input-group-size.component';
import { CheckboxesAndRadiosComponent } from './pages/forms/elements/checkboxes-and-radios/checkboxes-and-radios.component';
import { MultipleInputsComponent } from './pages/forms/elements/multiple-inputs/multiple-inputs.component';
import { MultipleAddonsComponent } from './pages/forms/elements/multiple-addons/multiple-addons.component';
import { ButtonAddonsComponent } from './pages/forms/elements/button-addons/button-addons.component';
import { ButtonsWithDropdownsComponent } from './pages/forms/elements/buttons-with-dropdowns/buttons-with-dropdowns.component';
import { SegmentedButtonsComponent } from './pages/forms/elements/segmented-buttons/segmented-buttons.component';
import { CustomFileInputComponent } from './pages/forms/elements/custom-file-input/custom-file-input.component';
import { CustomSelect1Component } from './pages/forms/elements/custom-select1/custom-select1.component';
import { ToastrComponent } from './plugins/toastr/toastr.component';
import { SweetAlertComponent } from './plugins/sweet-alert/sweet-alert.component';
import { WgCardComponent } from './pages/widget/wg-card/wg-card.component';
import { WgChartComponent } from './pages/widget/wg-chart/wg-chart.component';
import { WgListComponent } from './pages/widget/wg-list/wg-list.component';
import { Timeline1Component } from './elements/widget/wg-component/list/timeline-1/timeline-1.component';
import { Timeline2Component } from './elements/widget/wg-component/list/timeline-2/timeline-2.component';
import { NotificationsComponent } from './elements/widget/wg-component/list/notifications/notifications.component';
import { Notifications2Component } from './elements/widget/wg-component/list/notifications-2/notifications-2.component';
import { Message1Component } from './elements/widget/wg-component/list/message-1/message-1.component';
import { TodoListComponent } from './elements/widget/wg-component/list/todo-list/todo-list.component';
import { RecentPayComponent } from './elements/widget/wg-component/list/recent-pay/recent-pay.component';
import { AboutComponent } from './elements/widget/wg-component/card/about/about.component';
import { Card1Component } from './elements/widget/wg-component/card/card-1/card-1.component';
import { Card2Component } from './elements/widget/wg-component/card/card-2/card-2.component';
import { Card3Component } from './elements/widget/wg-component/card/card-3/card-3.component';
import { SocialMediaComponent } from './elements/widget/wg-component/card/social-media/social-media.component';
import { StudentsChartComponent } from './elements/widget/wg-component/chart/students-chart/students-chart.component';
import { VisitorActivityComponent } from './elements/widget/wg-component/chart/visitor-activity/visitor-activity.component';
import { ActiveUsersComponent } from './elements/widget/wg-component/chart/active-users/active-users.component';
import { BloodPressureComponent } from './elements/widget/wg-component/chart/blood-pressure/blood-pressure.component';
import { HeartRateComponent } from './elements/widget/wg-component/chart/heart-rate/heart-rate.component';
import { GlucoseRateComponent } from './elements/widget/wg-component/chart/glucose-rate/glucose-rate.component';
import { ClolesterolComponent } from './elements/widget/wg-component/chart/clolesterol/clolesterol.component';
import { Power1Component } from './elements/widget/wg-component/chart/power-1/power-1.component';
import { Power2Component } from './elements/widget/wg-component/chart/power-2/power-2.component';
import { Power3Component } from './elements/widget/wg-component/chart/power-3/power-3.component';
import { Power4Component } from './elements/widget/wg-component/chart/power-4/power-4.component';
import { LoremIpsums1Component } from './elements/widget/wg-component/chart/lorem-ipsums-1/lorem-ipsums-1.component';
import { LoremIpsums2Component } from './elements/widget/wg-component/chart/lorem-ipsums-2/lorem-ipsums-2.component';
import { MarketNowComponent } from './elements/widget/wg-component/chart/market-now/market-now.component';
import { SalesAnalysisComponent } from './elements/widget/wg-component/chart/sales-analysis/sales-analysis.component';
import { WeeklySalesComponent } from './elements/widget/wg-component/chart/weekly-sales/weekly-sales.component';
import { SalesStatusComponent } from './elements/widget/wg-component/chart/sales-status/sales-status.component';
import { AllSales1Component } from './elements/widget/wg-component/chart/all-sales-1/all-sales-1.component';
import { AllSales2Component } from './elements/widget/wg-component/chart/all-sales-2/all-sales-2.component';
import { TopProduct1Component } from './elements/widget/wg-component/chart/top-product-1/top-product-1.component';
import { TopProduct2Component } from './elements/widget/wg-component/chart/top-product-2/top-product-2.component';
import { LatencyComponent } from './elements/widget/wg-component/chart/latency/latency.component';

//ui bootstrap--
import { AccordionComponent } from './components/bootstrap/accordion/accordion.component';
import { AlertComponent } from './components/bootstrap/alert/alert.component';
import { AlertBasicComponent } from './components/bootstrap/alert/alert-basic/alert-basic.component';
import { AlertSolidColorComponent } from './components/bootstrap/alert/alert-solid-color/alert-solid-color.component';
import { AlertSquareComponent } from './components/bootstrap/alert/alert-square/alert-square.component';
import { AlertRoundedComponent } from './components/bootstrap/alert/alert-rounded/alert-rounded.component';
import { AlertDismissableComponent } from './components/bootstrap/alert/alert-dismissable/alert-dismissable.component';
import { AlertAltComponent } from './components/bootstrap/alert/alert-alt/alert-alt.component';
import { AlertAltSolidComponent } from './components/bootstrap/alert/alert-alt-solid/alert-alt-solid.component';
import { AlertWithSolidComponent } from './components/bootstrap/alert/alert-with-solid/alert-with-solid.component';
import { AlertWithLinkComponent } from './components/bootstrap/alert/alert-with-link/alert-with-link.component';
import { AlertWithlinkSolidcolorComponent } from './components/bootstrap/alert/alert-withlink-solidcolor/alert-withlink-solidcolor.component';
import { AlertNotificationsComponent } from './components/bootstrap/alert/alert-notifications/alert-notifications.component';
import { AlertIconLeftComponent } from './components/bootstrap/alert/alert-icon-left/alert-icon-left.component';
import { AlertOutlineComponent } from './components/bootstrap/alert/alert-outline/alert-outline.component';
import { AlertSocialComponent } from './components/bootstrap/alert/alert-social/alert-social.component';
import { AlertMessageComponent } from './components/bootstrap/alert/alert-message/alert-message.component';
import { AlertMessageWithsolidComponent } from './components/bootstrap/alert/alert-message-withsolid/alert-message-withsolid.component';
import { AlertLefticonBigComponent } from './components/bootstrap/alert/alert-lefticon-big/alert-lefticon-big.component';
import { BadgeComponent } from './components/bootstrap/badge/badge.component';
import { ButtonComponent } from './components/bootstrap/button/button.component';
import { ButtonGroupComponent } from './components/bootstrap/button-group/button-group.component';
import { CardComponent } from './components/bootstrap/card/card.component';
import { CarouselComponent } from './components/bootstrap/carousel/carousel.component';
import { CarouselBasicComponent } from './components/bootstrap/carousel/carousel-basic/carousel-basic.component';
import { CarouselWithCaptionsComponent } from './components/bootstrap/carousel/carousel-with-captions/carousel-with-captions.component';
import { CarouselSlidesOnlyComponent } from './components/bootstrap/carousel/carousel-slides-only/carousel-slides-only.component';
import { CarouselSlidesIndicatorsComponent } from './components/bootstrap/carousel/carousel-slides-indicators/carousel-slides-indicators.component';
import { CarouselSlidesCaptionsComponent } from './components/bootstrap/carousel/carousel-slides-captions/carousel-slides-captions.component';
import { DropdownComponent } from './components/bootstrap/dropdown/dropdown.component';
import { DropdownBasicComponent } from './components/bootstrap/dropdown/dropdown-basic/dropdown-basic.component';
import { DropdownConfigComponent } from './components/bootstrap/dropdown/dropdown-config/dropdown-config.component';
import { DropdownContainerComponent } from './components/bootstrap/dropdown/dropdown-container/dropdown-container.component';
import { DropdownFormComponent } from './components/bootstrap/dropdown/dropdown-form/dropdown-form.component';
import { DropdownManualComponent } from './components/bootstrap/dropdown/dropdown-manual/dropdown-manual.component';
import { DropdownNavbarComponent } from './components/bootstrap/dropdown/dropdown-navbar/dropdown-navbar.component';
import { DropdownSplitComponent } from './components/bootstrap/dropdown/dropdown-split/dropdown-split.component';
import { GridComponent } from './components/bootstrap/grid/grid.component';
import { GridOptionsComponent } from './components/bootstrap/grid/grid-options/grid-options.component';
import { GridColumnComponent } from './components/bootstrap/grid/grid-column/grid-column.component';
import { ListGroupComponent } from './components/bootstrap/list-group/list-group.component';
import { MediaObjectComponent } from './components/bootstrap/media-object/media-object.component';
import { ModalComponent } from './components/bootstrap/modal/modal.component';
import { ModalBasicComponent } from './components/bootstrap/modal/modal-basic/modal-basic.component';
import { ModalLongCententComponent } from './components/bootstrap/modal/modal-long-centent/modal-long-centent.component';
import { ModalCenteredComponent } from './components/bootstrap/modal/modal-centered/modal-centered.component';
import { ModalWithTooltipComponent } from './components/bootstrap/modal/modal-with-tooltip/modal-with-tooltip.component';
import { ModalGridComponent } from './components/bootstrap/modal/modal-grid/modal-grid.component';
import { ModalLargeComponent } from './components/bootstrap/modal/modal-large/modal-large.component';
import { ModalSmallComponent } from './components/bootstrap/modal/modal-small/modal-small.component';
import { PaginationComponent } from './components/bootstrap/pagination/pagination.component';
import { PaginationDefaultComponent } from './components/bootstrap/pagination/pagination-default/pagination-default.component';
import { PaginationGutterComponent } from './components/bootstrap/pagination/pagination-gutter/pagination-gutter.component';
import { PaginationColorComponent } from './components/bootstrap/pagination/pagination-color/pagination-color.component';
import { PaginationCircleComponent } from './components/bootstrap/pagination/pagination-circle/pagination-circle.component';
import { PopoverComponent } from './components/bootstrap/popover/popover.component';
import { ProgressbarComponent } from './components/bootstrap/progressbar/progressbar.component';
import { ProgressbarDefaultComponent } from './components/bootstrap/progressbar/progressbar-default/progressbar-default.component';
import { ProgressbarStripedComponent } from './components/bootstrap/progressbar/progressbar-striped/progressbar-striped.component';
import { ProgressbarColoredComponent } from './components/bootstrap/progressbar/progressbar-colored/progressbar-colored.component';
import { ProgressbarAnimatedStripedComponent } from './components/bootstrap/progressbar/progressbar-animated-striped/progressbar-animated-striped.component';
import { ProgressbarVerticalTopComponent } from './components/bootstrap/progressbar/progressbar-vertical-top/progressbar-vertical-top.component';
import { ProgressbarVerticalBottomComponent } from './components/bootstrap/progressbar/progressbar-vertical-bottom/progressbar-vertical-bottom.component';
import { ProgressbarDifferentSizeComponent } from './components/bootstrap/progressbar/progressbar-different-size/progressbar-different-size.component';
import { ProgressbarAnimatedComponent } from './components/bootstrap/progressbar/progressbar-animated/progressbar-animated.component';
import { ProgressbarSkillComponent } from './components/bootstrap/progressbar/progressbar-skill/progressbar-skill.component';
import { TablesComponent } from './components/bootstrap/tables/tables.component';
import { TableBasicComponent } from './components/bootstrap/tables/table-basic/table-basic.component';
import { TableStripedComponent } from './components/bootstrap/tables/table-striped/table-striped.component';
import { TableBorderedComponent } from './components/bootstrap/tables/table-bordered/table-bordered.component';
import { TableHoverComponent } from './components/bootstrap/tables/table-hover/table-hover.component';
import { TableHover2Component } from './components/bootstrap/tables/table-hover2/table-hover2.component';
import { TableBordered2Component } from './components/bootstrap/tables/table-bordered2/table-bordered2.component';
import { TableStripped2Component } from './components/bootstrap/tables/table-stripped2/table-stripped2.component';
import { TableResponsiveComponent } from './components/bootstrap/tables/table-responsive/table-responsive.component';
import { TableHeadingWithBackgroundComponent } from './components/bootstrap/tables/table-heading-with-background/table-heading-with-background.component';
import { TablePrimaryComponent } from './components/bootstrap/tables/table-primary/table-primary.component';
import { TablePrimaryHoverComponent } from './components/bootstrap/tables/table-primary-hover/table-primary-hover.component';
import { TableContextuatComponent } from './components/bootstrap/tables/table-contextuat/table-contextuat.component';
import { TablePaymentsComponent } from './components/bootstrap/tables/table-payments/table-payments.component';
import { TableExamToppersComponent } from './components/bootstrap/tables/table-exam-toppers/table-exam-toppers.component';
import { TabsComponent } from './components/bootstrap/tabs/tabs.component';
import { TabBasicComponent } from './components/bootstrap/tabs/tab-basic/tab-basic.component';
import { TabMarkupComponent } from './components/bootstrap/tabs/tab-markup/tab-markup.component';
import { TabVerticalComponent } from './components/bootstrap/tabs/tab-vertical/tab-vertical.component';
import { TabSelectionComponent } from './components/bootstrap/tabs/tab-selection/tab-selection.component';
import { TabKeepContentComponent } from './components/bootstrap/tabs/tab-keep-content/tab-keep-content.component';
import { TabDynamicComponent } from './components/bootstrap/tabs/tab-dynamic/tab-dynamic.component';
import { TabConfigComponent } from './components/bootstrap/tabs/tab-config/tab-config.component';
import { TabCustomStyleComponent } from './components/bootstrap/tabs/tab-custom-style/tab-custom-style.component';
import { TypographyComponent } from './components/bootstrap/typography/typography.component';
import { CustomAccordionComponent } from './components/bootstrap/custom-accordion/custom-accordion.component';

// charts
import { AreaComponent } from './plugins/charts/apex/area/area.component';
import { AreaAreaStackedComponent } from './plugins/charts/apex/area/area-area-stacked/area-area-stacked.component';
import { AreaBasicComponent } from './plugins/charts/apex/area/area-basic/area-basic.component';
import { AreaIrregularTimeseriesComponent } from './plugins/charts/apex/area/area-irregular-timeseries/area-irregular-timeseries.component';
import { AreaMissingOrNullValuesComponent } from './plugins/charts/apex/area/area-missing-or-null-values/area-missing-or-null-values.component';
import { AreaNegativeComponent } from './plugins/charts/apex/area/area-negative/area-negative.component';
import { AreaSplineComponent } from './plugins/charts/apex/area/area-spline/area-spline.component';
import { LineComponent } from './plugins/charts/apex/line/line.component';
import { BasicLineChartComponent } from './plugins/charts/apex/line/basic-line-chart/basic-line-chart.component';
import { ZoomableTimeseriesComponent } from './plugins/charts/apex/line/zoomable-timeseries/zoomable-timeseries.component';
import { SyncingChartsComponent } from './plugins/charts/apex/line/syncing-charts/syncing-charts.component';
import { SteplineChartComponent } from './plugins/charts/apex/line/stepline-chart/stepline-chart.component';
import { MissingOrNullValuesComponent } from './plugins/charts/apex/line/missing-or-null-values/missing-or-null-values.component';
import { GradientLineChartComponent } from './plugins/charts/apex/line/gradient-line-chart/gradient-line-chart.component';
import { DashedLineChartComponent } from './plugins/charts/apex/line/dashed-line-chart/dashed-line-chart.component';
import { BrushChartComponent } from './plugins/charts/apex/line/brush-chart/brush-chart.component';
import { ColumnComponent } from './plugins/charts/apex/column/column.component';
import { ColumnBasicComponent } from './plugins/charts/apex/column/column-basic/column-basic.component';
import { ColumnDataLabelsComponent } from './plugins/charts/apex/column/column-data-labels/column-data-labels.component';
import { ColumnStackedComponent } from './plugins/charts/apex/column/column-stacked/column-stacked.component';
import { ColumnStacked100Component } from './plugins/charts/apex/column/column-stacked100/column-stacked100.component';
import { ColumnRotatedLabelsComponent } from './plugins/charts/apex/column/column-rotated-labels/column-rotated-labels.component';
import { ColumnNegativeValuesComponent } from './plugins/charts/apex/column/column-negative-values/column-negative-values.component';
import { ColumnLoadedChartComponent } from './plugins/charts/apex/column/column-loaded-chart/column-loaded-chart.component';
import { ColumnDistributedComponent } from './plugins/charts/apex/column/column-distributed/column-distributed.component';
import { ColumnRangeComponent } from './plugins/charts/apex/column/column-range/column-range.component';
import { ColumnDumbbellComponent } from './plugins/charts/apex/column/column-dumbbell/column-dumbbell.component';
import { ColumnWithMarkersComponent } from './plugins/charts/apex/column/column-with-markers/column-with-markers.component';
import { BarComponent } from './plugins/charts/apex/bar/bar.component';
import { BarBasicComponent } from './plugins/charts/apex/bar/bar-basic/bar-basic.component';
import { BarGroupedComponent } from './plugins/charts/apex/bar/bar-grouped/bar-grouped.component';
import { BarStackedComponent } from './plugins/charts/apex/bar/bar-stacked/bar-stacked.component';
import { BarStacked100Component } from './plugins/charts/apex/bar/bar-stacked100/bar-stacked100.component';
import { BarNegativeValuesComponent } from './plugins/charts/apex/bar/bar-negative-values/bar-negative-values.component';
import { BarReversedComponent } from './plugins/charts/apex/bar/bar-reversed/bar-reversed.component';
import { BarCustomDataLabelsComponent } from './plugins/charts/apex/bar/bar-custom-data-labels/bar-custom-data-labels.component';
import { BarPatternedComponent } from './plugins/charts/apex/bar/bar-patterned/bar-patterned.component';
import { BarImagesComponent } from './plugins/charts/apex/bar/bar-images/bar-images.component';
import { MixedComponent } from './plugins/charts/apex/mixed/mixed.component';
import { MixedLineColumnComponent } from './plugins/charts/apex/mixed/mixed-line-column/mixed-line-column.component';
import { MixedMultipleYAxisComponent } from './plugins/charts/apex/mixed/mixed-multiple-y-axis/mixed-multiple-y-axis.component';
import { MixedLineAreaComponent } from './plugins/charts/apex/mixed/mixed-line-area/mixed-line-area.component';
import { MixedLineColumnAreaComponent } from './plugins/charts/apex/mixed/mixed-line-column-area/mixed-line-column-area.component';
import { CandlestickComponent } from './plugins/charts/apex/candlestick/candlestick.component';
import { CandlestickBasicComponent } from './plugins/charts/apex/candlestick/candlestick-basic/candlestick-basic.component';
import { CandlestickComboComponent } from './plugins/charts/apex/candlestick/candlestick-combo/candlestick-combo.component';
import { CandlestickCategoryComponent } from './plugins/charts/apex/candlestick/candlestick-category/candlestick-category.component';
import { PieComponent } from './plugins/charts/apex/pie/pie.component';
import { PieSimpleComponent } from './plugins/charts/apex/pie/pie-simple/pie-simple.component';
import { PieDonutComponent } from './plugins/charts/apex/pie/pie-donut/pie-donut.component';
import { PieMonochromeComponent } from './plugins/charts/apex/pie/pie-monochrome/pie-monochrome.component';
import { PieGradientDonutComponent } from './plugins/charts/apex/pie/pie-gradient-donut/pie-gradient-donut.component';
import { PieSemiDonutComponent } from './plugins/charts/apex/pie/pie-semi-donut/pie-semi-donut.component';
import { PieDonutWithPatternComponent } from './plugins/charts/apex/pie/pie-donut-with-pattern/pie-donut-with-pattern.component';
import { PolarAreaComponent } from './plugins/charts/apex/polar-area/polar-area.component';
import { PolarAreaBasicComponent } from './plugins/charts/apex/polar-area/polar-area-basic/polar-area-basic.component';
import { PolarAreaMonochromeComponent } from './plugins/charts/apex/polar-area/polar-area-monochrome/polar-area-monochrome.component';
import { BubbleComponent } from './plugins/charts/apex/bubble/bubble.component';
import { BubbleSimpleComponent } from './plugins/charts/apex/bubble/bubble-simple/bubble-simple.component';
import { Bubble3DComponent } from './plugins/charts/apex/bubble/bubble3-d/bubble3-d.component';
import { HeatmapComponent } from './plugins/charts/apex/heatmap/heatmap.component';
import { HeatmapBasicComponent } from './plugins/charts/apex/heatmap/heatmap-basic/heatmap-basic.component';
import { HeatmapMultipleColorsComponent } from './plugins/charts/apex/heatmap/heatmap-multiple-colors/heatmap-multiple-colors.component';
import { HeatmapColorRangeComponent } from './plugins/charts/apex/heatmap/heatmap-color-range/heatmap-color-range.component';
import { HeatmapRoundedComponent } from './plugins/charts/apex/heatmap/heatmap-rounded/heatmap-rounded.component';
import { TimelineComponent } from './plugins/charts/apex/timeline/timeline.component';
import { TimelineBasicComponent } from './plugins/charts/apex/timeline/timeline-basic/timeline-basic.component';
import { TimelineDistributedComponent } from './plugins/charts/apex/timeline/timeline-distributed/timeline-distributed.component';
import { TimelineMultiSeriesComponent } from './plugins/charts/apex/timeline/timeline-multi-series/timeline-multi-series.component';
import { TimelineAdvancedComponent } from './plugins/charts/apex/timeline/timeline-advanced/timeline-advanced.component';
import { TimelineMultipleSeriesComponent } from './plugins/charts/apex/timeline/timeline-multiple-series/timeline-multiple-series.component';
import { TimelineDumbbellComponent } from './plugins/charts/apex/timeline/timeline-dumbbell/timeline-dumbbell.component';
import { RadarComponent } from './plugins/charts/apex/radar/radar.component';
import { RadarBasicComponent } from './plugins/charts/apex/radar/radar-basic/radar-basic.component';
import { RadarMultipleSeriesComponent } from './plugins/charts/apex/radar/radar-multiple-series/radar-multiple-series.component';
import { RadarPolygonFillComponent } from './plugins/charts/apex/radar/radar-polygon-fill/radar-polygon-fill.component';
import { RadialbarComponent } from './plugins/charts/apex/radialbar/radialbar.component';
import { RadialbarBasicComponent } from './plugins/charts/apex/radialbar/radialbar-basic/radialbar-basic.component';
import { RadialbarMultipleComponent } from './plugins/charts/apex/radialbar/radialbar-multiple/radialbar-multiple.component';
import { RadialbarCustomAngleCircleComponent } from './plugins/charts/apex/radialbar/radialbar-custom-angle-circle/radialbar-custom-angle-circle.component';
import { RadialbarGradientComponent } from './plugins/charts/apex/radialbar/radialbar-gradient/radialbar-gradient.component';
import { RadialbarStrokedAngularGaugeComponent } from './plugins/charts/apex/radialbar/radialbar-stroked-angular-gauge/radialbar-stroked-angular-gauge.component';
import { RadialbarSemiCircleGaugeComponent } from './plugins/charts/apex/radialbar/radialbar-semi-circle-gauge/radialbar-semi-circle-gauge.component';
import { ScatterComponent } from './plugins/charts/apex/scatter/scatter.component';
import { ScatterBasicComponent } from './plugins/charts/apex/scatter/scatter-basic/scatter-basic.component';
import { ScatterDatetimeComponent } from './plugins/charts/apex/scatter/scatter-datetime/scatter-datetime.component';
import { ScatterImagesComponent } from './plugins/charts/apex/scatter/scatter-images/scatter-images.component';
import { TreemapComponent } from './plugins/charts/apex/treemap/treemap.component';
import { TreemapBasicComponent } from './plugins/charts/apex/treemap/treemap-basic/treemap-basic.component';
import { TreemapMultipleSeriesComponent } from './plugins/charts/apex/treemap/treemap-multiple-series/treemap-multiple-series.component';
import { TreemapColorRangeComponent } from './plugins/charts/apex/treemap/treemap-color-range/treemap-color-range.component';
import { TreemapDistributedComponent } from './plugins/charts/apex/treemap/treemap-distributed/treemap-distributed.component';
import { SparklinesComponent } from './plugins/charts/apex/sparklines/sparklines.component';
import { SparklinesBasicComponent } from './plugins/charts/apex/sparklines/sparklines-basic/sparklines-basic.component';


import { ChartBasicComponent } from './plugins/charts/chart-js/general-chartjs/chart-basic/chart-basic.component';
import { ChartGradientComponent } from './plugins/charts/chart-js/general-chartjs/chart-gradient/chart-gradient.component';
import { ChartStalikedComponent } from './plugins/charts/chart-js/general-chartjs/chart-staliked/chart-staliked.component';
import { ChartBasicLineComponent } from './plugins/charts/chart-js/general-chartjs/chart-basic-line/chart-basic-line.component';
import { ChartGradientLineComponent } from './plugins/charts/chart-js/general-chartjs/chart-gradient-line/chart-gradient-line.component';
import { ChartDualLineComponent } from './plugins/charts/chart-js/general-chartjs/chart-dual-line/chart-dual-line.component';
import { ChartAnimationComponent } from './plugins/charts/chart-js/general-chartjs/chart-animation/chart-animation.component';
import { ChartMixedTypeComponent } from './plugins/charts/chart-js/general-chartjs/chart-mixed-type/chart-mixed-type.component';
import { ChartPieComponent } from './plugins/charts/chart-js/general-chartjs/chart-pie/chart-pie.component';
import { ChartDoughnutComponent } from './plugins/charts/chart-js/general-chartjs/chart-doughnut/chart-doughnut.component';
import { ChartRadarComponent } from './plugins/charts/chart-js/general-chartjs/chart-radar/chart-radar.component';
import { ChartPolarComponent } from './plugins/charts/chart-js/general-chartjs/chart-polar/chart-polar.component';
import { BarChartjsComponent } from './plugins/charts/chart-js/bar-chartjs/bar-chartjs.component';
import { BorderRadiusComponent } from './plugins/charts/chart-js/bar-chartjs/border-radius/border-radius.component';
import { FloatingBarComponent } from './plugins/charts/chart-js/bar-chartjs/floating-bar/floating-bar.component';
import { LineChartjsComponent } from './plugins/charts/chart-js/line-chartjs/line-chartjs.component';
import { HorizontalChartjsComponent } from './plugins/charts/chart-js/bar-chartjs/horizontal-chartjs/horizontal-chartjs.component';
import { StackedChartjsComponent } from './plugins/charts/chart-js/bar-chartjs/stacked-chartjs/stacked-chartjs.component';
import { InterpolationChartComponent } from './plugins/charts/chart-js/line-chartjs/interpolation-chart/interpolation-chart.component';
import { MultiAxisLineChartComponent } from './plugins/charts/chart-js/line-chartjs/multi-axis-line-chart/multi-axis-line-chart.component';
import { BasicChartComponent } from './plugins/charts/chart-js/line-chartjs/basic-chart/basic-chart.component';
import { LineStylingComponent } from './plugins/charts/chart-js/line-chartjs/line-styling/line-styling.component';
import { SteppedChartComponent } from './plugins/charts/chart-js/line-chartjs/stepped-chart/stepped-chart.component';
import { PointChartComponent } from './plugins/charts/chart-js/line-chartjs/point-chart/point-chart.component';
import { AnimationChartjsComponent } from './plugins/charts/chart-js/animation-chartjs/animation-chartjs.component';
import { DelayChartComponent } from './plugins/charts/chart-js/animation-chartjs/delay-chart/delay-chart.component';
import { DropChartComponent } from './plugins/charts/chart-js/animation-chartjs/drop-chart/drop-chart.component';
import { LoopChartComponent } from './plugins/charts/chart-js/animation-chartjs/loop-chart/loop-chart.component';
import { ProgressiveLineComponent } from './plugins/charts/chart-js/animation-chartjs/progressive-line/progressive-line.component';
import { AreaChartjsComponent } from './plugins/charts/chart-js/area-chartjs/area-chartjs.component';
import { LineDrawTimeChartComponent } from './plugins/charts/chart-js/area-chartjs/line-draw-time-chart/line-draw-time-chart.component';
import { LineStackedChartComponent } from './plugins/charts/chart-js/area-chartjs/line-stacked-chart/line-stacked-chart.component';
import { LineDatasetsChartComponent } from './plugins/charts/chart-js/area-chartjs/line-datasets-chart/line-datasets-chart.component';
import { BubbleChartjsComponent } from './plugins/charts/chart-js/bubble-chartjs/bubble-chartjs.component';
import { BasicBubbleComponent } from './plugins/charts/chart-js/bubble-chartjs/basic-bubble/basic-bubble.component';
import { ScatterChartjsComponent } from './plugins/charts/chart-js/bubble-chartjs/scatter-chartjs/scatter-chartjs.component';
import { GeneralChartjsComponent } from './plugins/charts/chart-js/general-chartjs/general-chartjs.component';
import { LoginComponent } from './pages/authentication/login/login.component';
import { RegisterComponent } from './pages/authentication/register/register.component';
import { ForgotPasswordComponent } from './pages/authentication/forgot-password/forgot-password.component';
import { LockScreenComponent } from './pages/authentication/lock-screen/lock-screen.component';
import { Error400Component } from './pages/error/error400/error400.component';
import { Error403Component } from './pages/error/error403/error403.component';
import { Error404Component } from './pages/error/error404/error404.component';
import { Error500Component } from './pages/error/error500/error500.component';
import { Error503Component } from './pages/error/error503/error503.component';
import { EmptyComponent } from './pages/error/empty/empty.component';
import { PublishedComponent } from './elements/cms/published/published.component';

import { BreadcrumbComponent } from './layout/nav/breadcrumb/breadcrumb.component';
import { Select2Component } from './plugins/select2/select2.component';
import { SwitcherComponent } from './switcher/switcher.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    FooterComponent,
    HeaderComponent,
    NavHeaderComponent,
    NavigationComponent,
    DashboardComponent,
    ChatBoxComponent,
    MyWalletComponent,
    InvoicesComponent,
    CardsCenterComponent,
    TransactionsComponent,
    TransactionsDetailsComponent,
    ContentComponent,
    OrangeCardComponent,
    MainCardComponent,
    PurpleCardComponent,
    GreenCardComponent,
    TransactionOverviewComponent,
    QuickTransferComponent,
    SpendingsComponent,
    PreviousTransactionsComponent,
    WeeklyWalletUsageComponent,
    OutomeComponent,
    IncomeComponent,
    LimitComponent,
    MainBalanceWolletComponent,
    PaymentHistoryComponent,
    InvoicesSentComponent,
    PaymentTableComponent,
    CustomPaginationComponent,
    CustomDropdownComponent,
    CardListComponent,
    CardStatisticComponent,
    CardDemoCarouselComponent,
    MainCardDbComponent,
    HeadTransactionComponent,
    TransactionListComponent,
    DetailsPaymentIdComponent,
    DetailsStatisticComponent,
    BarChartApexComponent,
    PieChartApexComponent,
    AreaChartApexComponent,
    FilterHeadComponent,
    ContentAddComponent,
    EmailAddComponent,
    EmailTemplateComponent,
    MenusComponent,
    BlogComponent,
    BlogAddComponent,
    BlogCategoryComponent,
    ProfileComponent,
    EditProfileComponent,
    PostDetailsComponent,
    ComposeComponent,
    InboxComponent,
    ReadComponent,
    CheckoutComponent,
    EcomCustomersComponent,
    InvoiceComponent,
    OrderComponent,
    ProductDetailComponent,
    ProductGridComponent,
    ProductListComponent,
    CalenderComponent,
    EmailSidbarComponent,
    ProfileCardComponent,
    ProfileSidMenuComponent,
    ProfilePostContentComponent,
    LightGalleryComponent,
    SweetAlertComponent,
    PostDetailContentComponent,
    OwlCarouselComponent,
    FlatIconsComponent,
    EditorComponent,
    FormValidationsComponent,
    PickersComponent,
    DatePickerComponent,
    TimePickerComponent,
    ColorPickerComponent,
    Date1Component,
    Date2Component,
    Date3Component,
    ElementsComponent,
    PickersComponent,
    InputStyleComponent,
    CheckboxComponent,
    TextareaComponent,
    InputSizeComponent,
    SelectSizeComponent,
    SelectListComponent,
    HorizontalFormComponent,
    VerticalFormComponent,
    CheckboxesComponent,
    InlineCheckboxesComponent,
    RadioButtonsComponent,
    InlineRadioComponent,
    ReadonlyComponent,
    InlineFormComponent,
    FormGridComponent,
    FormRowComponent,
    FormLabelSizeComponent,
    ColumnSizeComponent,
    AutoSizingComponent,
    CustomSelectComponent,
    DisabledFormsComponent,
    InputGroupComponent,
    InputGroupSizeComponent,
    CheckboxesAndRadiosComponent,
    MultipleInputsComponent,
    MultipleAddonsComponent,
    ButtonAddonsComponent,
    ButtonsWithDropdownsComponent,
    SegmentedButtonsComponent,
    CustomFileInputComponent,
    CustomSelect1Component,
    ToastrComponent,
    WgCardComponent,
    WgChartComponent,
    WgListComponent,
    Timeline1Component,
    Timeline2Component,
    NotificationsComponent,
    Notifications2Component,
    Message1Component,
    TodoListComponent,
    RecentPayComponent,
    AboutComponent,
    Card1Component,
    Card2Component,
    Card3Component,
    SocialMediaComponent,
    StudentsChartComponent,
    VisitorActivityComponent,
    ActiveUsersComponent,
    BloodPressureComponent,
    HeartRateComponent,
    GlucoseRateComponent,
    ClolesterolComponent,
    Power1Component,
    Power2Component,
    Power3Component,
    Power4Component,
    LoremIpsums1Component,
    LoremIpsums2Component,
    MarketNowComponent,
    SalesAnalysisComponent,
    WeeklySalesComponent,
    SalesStatusComponent,
    AllSales1Component,
    AllSales2Component,
    TopProduct1Component,
    TopProduct2Component,
    LatencyComponent,

    //mat component
    DzmtAutocompleteComponent,
    DzmtAutocompleteFirstActiveComponent,
    DzmtAutocompleteDisplayComponent,
    DzmtAutocompleteFilterComponent,
    DzmtAutocompleteOptgroupComponent,
    DzmtAutocompleteOverviewComponent,
    DzmtAutocompletePlaneComponent,
    DzmtAutocompleteSimpleComponent,
    DzmtBadgeComponent,
    DzmtBottomSheetComponent,
    DzmtButtonComponent,
    DzmtButtonBasicComponent,
    DzmtButtonVarietiesComponent,
    DzmtButtonTonggleComponent,
    ButtonToggleAppearanceComponent,
    ButtonExclusiveSelectionComponent,
    ButtonWithFormsComponent,
    ButtonBasicTogglesComponent,
    DzmtCardComponent,
    CardMultipleSectionsComponent,
    CardBasicComponent,
    DzmtCheckboxComponent,
    ConfigurableCheckboxComponent,
    BasicCheckboxComponent,
    DzmtChipsComponent,
    ChipsAutocompleteComponent,
    ChipsDragDropComponent,
    ChipsWithInputComponent,
    ChipsBasicComponent,
    ChipsStackedComponent,
    DzmtDatepickerComponent,
    ComparisonRangesComponent,
    FormsIntegrationComponent,
    BasicDateRangeComponent,
    RangeCustomSelectionStrategyComponent,
    DatepickerActionButtonsComponent,
    DatepickerOpenMethodComponent,
    DatepickerPaletteColorsComponent,
    DatepickerCustomCalendarHeaderComponent,
    DatepickerCustomDateClassesComponent,
    DisabledDatepickerComponent,
    InputChangeEventsComponent,
    DatepickerFilterValidationComponent,
    DatepickerMinMaxValidationComponent,
    BasicDatepickerComponent,
    DatepickerStartDateComponent,
    DatepickerTouchUiComponent,
    DatepickerSelectedValueComponent,
    DzmtDialogComponent,
    HeaderScrollbarActionComponent,
    InjectingDataComponent,
    DialogElementsComponent,
    DialogFromMenuComponent,
    DialogOverviewComponent,
    DzmtDividerComponent,
    DzmtExpansionComponent,
    ExpandCollapseAllTogglesComponent,
    BasicExpansionPanelComponent,
    ExpansionAsAccordionComponent,
    DzmtFormFieldComponent,
    AppearanceVariantsComponent,
    FieldWithErrorMessagesComponent,
    FieldWithHintsComponent,
    FieldWithLabelComponent,
    SimpleFormFieldComponent,
    FieldWithPrefixSuffixComponent,
    FieldThemingComponent,
    DzmtGridListComponent,
    DynamicGridListComponent,
    BasicGridListComponent,
    DzmtIconComponent,
    SvgIconComponent,
    DzmtInputComponent,
    InputWithClearButtonComponent,
    InputErrorStateMatcherComponent,
    InputWithErrorMessageComponent,
    InputWithPrefixesSuffixesComponent,
    InputWithHintsComponent,
    InputBasicComponent,
    InputInFormComponent,
    DzmtListComponent,
    BasicListComponent,
    ListWithSectionsComponent,
    ListWithSelectionComponent,
    ListWithSingleSelectionComponent,
    DzmtMenuComponent,
    MenuWithIconsComponent,
    NestedMenuComponent,
    BasicMenuComponent,
    MenuPositioningComponent,
    DzmtPaginatorComponent,
    ConfigurablePaginatorComponent,
    BasicPaginatorComponent,
    DzmtProgressBarComponent,
    ConfigurableProgressBarComponent,
    BufferProgressBarComponent,
    DeterminateProgressBarComponent,
    IndeterminateProgressBarComponent,
    QueryProgressBarComponent,
    DzmtProgressSpinnerComponent,
    ConfigurableProgressSpinnerComponent,
    BasicProgressSpinnerComponent,
    DzmtRadioComponent,
    RadiosWithNgModelComponent,
    RadiosBasicComponent,
    DzmtRippleComponent,
    DzmtSelectComponent,
    CustomTriggerTextComponent,
    DisabledSelectComponent,
    CustomErrorStateMatcherComponent,
    SelectInFormComponent,
    SelectFormFieldFeaturesComponent,
    InitialValueNoFormComponent,
    MultipleSelectionComponent,
    NoOptionRippleComponent,
    OptionGroupsComponent,
    BasicSelectComponent,
    CustomPanelStylingComponent,
    SelectInReactiveFormComponent,
    SelectWithResetOptionComponent,
    TwoWayValueBindingComponent,
    DzmtSidenavComponent,
    AutosizeSidenavComponent,
    DrawerExplicitBackdropSettingComponent,
    DzmtSlideToggleComponent,
    ConfigurableSlideToggleComponent,
    SlideToggleWithFormsComponent,
    SlideToggleBasicComponent,
    DzmtSliderComponent,
    ConfigurableSliderComponent,
    SliderBasicComponent,
    ValueSliderComponent,
    CustomThumbLabelFormattingComponent,
    DzmtSnackBarComponent,
    SnackBarCustomComponentComponent,
    BasicSnackBarComponent,
    SnackBarConfigurableComponent,
    DzmtSortComponent,
    DzmtStepperComponent,
    EditableStepsComponent,
    DisplaysErrorsInStepsComponent,
    LabelBottomPositionComponent,
    OptionalStepsComponent,
    StepperOverviewComponent,
    StepperCustomizedStatesComponent,
    StepperVerticalComponent,
    StepperAnimationsComponent,
    StepperHeaderPositionComponent,
    CustomStepperComponent,
    DzmtTableComponent,
    BasicTableComponent,
    DynamicallyChangingColumnsDisplayedComponent,
    TableExpandableRowsComponent,
    TableWithFilteringComponent,
    TableWithDisplayFlexComponent,
    FooterRowTableComponent,
    MultipleHeaderFooterRowsComponent,
    DataTableSortingPaginationFilteringComponent,
    TableWithPaginationComponent,
    TableWithReOrderableColumnsComponent,
    TableContextPropertiesComponent,
    TableWithSelectionComponent,
    TableWithSortingComponent,
    TableWithStickyColumnsComponent,
    TableFlexWithToggleAbleStickyHeadersFootersColumnsComponent,
    TableStickyFooterComponent,
    TableStickyHeaderComponent,
    TableWithConfigurationsInterfaceComponent,
    TableWithSimpleTextHeaderFooterComponent,
    DzmtTabsComponent,
    AlignedLabelsComponent,
    TabGroupAnimationsComponent,
    AsynchronouslyLoadingTabContentsComponent,
    BasicTabGroupComponent,
    TabsWithCustomLabelTemplateComponent,
    TabsWithDynamicHeightComponent,
    TabsWithHeadersOnBottomComponent,
    TabsWithContentLoadedLazilyComponent,
    TabsWithStretchedLabelsComponent,
    TabsWithThemeOptionsComponent,
    BasicUseOfTabNavBarComponent,
    DzmtToolbarComponent,
    BasicToolbarComponent,
    MultiRowToolbarComponent,
    ToolbarOverviewComponent,
    DzmtTooltipComponent,
    TooltipAutoHidingComponent,
    TooltipWithShowHideDelayComponent,
    TooltipWithCustomClassComponent,
    TooltipCanBeDisabledComponent,
    TooltipManuallyShowHideComponent,
    TooltipWithChangingMessageComponent,
    TooltipWithHideShowDelayComponent,
    BasicTooltipComponent,
    TooltipWithCustomPositionComponent,
    DzmtTreeComponent,
    TreeWithCheckboxesComponent,
    TreeWithDynamicDataComponent,
    TreeWithFlatNodesComponent,
    TreeWithPartiallyLoadedDataComponent,
    TreeWithNestedNodesComponent,
    //ui bootstart
    AccordionComponent,
    AlertComponent,
    AlertBasicComponent,
    AlertSolidColorComponent,
    AlertSquareComponent,
    AlertRoundedComponent,
    AlertDismissableComponent,
    AlertAltComponent,
    AlertAltSolidComponent,
    AlertWithSolidComponent,
    AlertWithLinkComponent,
    AlertWithlinkSolidcolorComponent,
    AlertNotificationsComponent,
    AlertIconLeftComponent,
    AlertOutlineComponent,
    AlertSocialComponent,
    AlertMessageComponent,
    AlertMessageWithsolidComponent,
    AlertLefticonBigComponent,
    BadgeComponent,
    ButtonComponent,
    ButtonGroupComponent,
    CardComponent,
    CarouselComponent,
    CarouselBasicComponent,
    CarouselWithCaptionsComponent,
    CarouselSlidesOnlyComponent,
    CarouselSlidesIndicatorsComponent,
    CarouselSlidesCaptionsComponent,
    DropdownComponent,
    DropdownBasicComponent,
    DropdownConfigComponent,
    DropdownContainerComponent,
    DropdownFormComponent,
    DropdownManualComponent,
    DropdownNavbarComponent,
    DropdownSplitComponent,
    GridComponent,
    GridOptionsComponent,
    GridColumnComponent,
    ListGroupComponent,
    MediaObjectComponent,
    ModalComponent,
    ModalBasicComponent,
    ModalLongCententComponent,
    ModalCenteredComponent,
    ModalWithTooltipComponent,
    ModalGridComponent,
    ModalLargeComponent,
    ModalSmallComponent,
    PaginationComponent,
    PaginationDefaultComponent,
    PaginationGutterComponent,
    PaginationColorComponent,
    PaginationCircleComponent,
    PopoverComponent,
    ProgressbarComponent,
    ProgressbarDefaultComponent,
    ProgressbarStripedComponent,
    ProgressbarColoredComponent,
    ProgressbarAnimatedStripedComponent,
    ProgressbarVerticalTopComponent,
    ProgressbarVerticalBottomComponent,
    ProgressbarDifferentSizeComponent,
    ProgressbarAnimatedComponent,
    ProgressbarSkillComponent,
    TablesComponent,
    TableBasicComponent,
    TableStripedComponent,
    TableBorderedComponent,
    TableHoverComponent,
    TableHover2Component,
    TableBordered2Component,
    TableStripped2Component,
    TableResponsiveComponent,
    TableHeadingWithBackgroundComponent,
    TablePrimaryComponent,
    TablePrimaryHoverComponent,
    TableContextuatComponent,
    TablePaymentsComponent,
    TableExamToppersComponent,
    TabsComponent,
    TabBasicComponent,
    TabMarkupComponent,
    TabVerticalComponent,
    TabSelectionComponent,
    TabKeepContentComponent,
    TabDynamicComponent,
    TabConfigComponent,
    TabCustomStyleComponent,
    TypographyComponent,
    CustomAccordionComponent,
    // charts
    AreaComponent,
    AreaAreaStackedComponent,
    AreaBasicComponent,
    AreaIrregularTimeseriesComponent,
    AreaMissingOrNullValuesComponent,
    AreaNegativeComponent,
    AreaSplineComponent,
    LineComponent,
    BasicLineChartComponent,
    ZoomableTimeseriesComponent,
    SyncingChartsComponent,
    SteplineChartComponent,
    MissingOrNullValuesComponent,
    GradientLineChartComponent,
    DashedLineChartComponent,
    BrushChartComponent,
    ColumnComponent,
    ColumnBasicComponent,
    ColumnDataLabelsComponent,
    ColumnStackedComponent,
    ColumnStacked100Component,
    ColumnRotatedLabelsComponent,
    ColumnNegativeValuesComponent,
    ColumnLoadedChartComponent,
    ColumnDistributedComponent,
    ColumnRangeComponent,
    ColumnDumbbellComponent,
    ColumnWithMarkersComponent,
    BarComponent,
    BarBasicComponent,
    BarGroupedComponent,
    BarStackedComponent,
    BarStacked100Component,
    BarNegativeValuesComponent,
    BarReversedComponent,
    BarCustomDataLabelsComponent,
    BarPatternedComponent,
    BarImagesComponent,
    MixedComponent,
    MixedLineColumnComponent,
    MixedMultipleYAxisComponent,
    MixedLineAreaComponent,
    MixedLineColumnAreaComponent,
    CandlestickComponent,
    CandlestickBasicComponent,
    CandlestickComboComponent,
    CandlestickCategoryComponent,
    PieComponent,
    PieSimpleComponent,
    PieDonutComponent,
    PieMonochromeComponent,
    PieGradientDonutComponent,
    PieSemiDonutComponent,
    PieDonutWithPatternComponent,
    PolarAreaComponent,
    PolarAreaBasicComponent,
    PolarAreaMonochromeComponent,
    BubbleComponent,
    BubbleSimpleComponent,
    Bubble3DComponent,
    HeatmapComponent,
    HeatmapBasicComponent,
    HeatmapMultipleColorsComponent,
    HeatmapColorRangeComponent,
    HeatmapRoundedComponent,
    TimelineComponent,
    TimelineBasicComponent,
    TimelineDistributedComponent,
    TimelineMultiSeriesComponent,
    TimelineAdvancedComponent,
    TimelineMultipleSeriesComponent,
    TimelineDumbbellComponent,
    RadarComponent,
    RadarBasicComponent,
    RadarMultipleSeriesComponent,
    RadarPolygonFillComponent,
    RadialbarComponent,
    RadialbarBasicComponent,
    RadialbarMultipleComponent,
    RadialbarCustomAngleCircleComponent,
    RadialbarGradientComponent,
    RadialbarStrokedAngularGaugeComponent,
    RadialbarSemiCircleGaugeComponent,
    ScatterComponent,
    ScatterBasicComponent,
    ScatterDatetimeComponent,
    ScatterImagesComponent,
    TreemapComponent,
    TreemapBasicComponent,
    TreemapMultipleSeriesComponent,
    TreemapColorRangeComponent,
    TreemapDistributedComponent,
    SparklinesComponent,
    SparklinesBasicComponent,

    ChartBasicComponent,
    ChartGradientComponent,
    ChartStalikedComponent,
    ChartBasicLineComponent,
    ChartGradientLineComponent,
    ChartDualLineComponent,
    ChartAnimationComponent,
    ChartMixedTypeComponent,
    ChartPieComponent,
    ChartDoughnutComponent,
    ChartRadarComponent,
    ChartPolarComponent,
    BarChartjsComponent,
    BorderRadiusComponent,
    FloatingBarComponent,
    LineChartjsComponent,
    HorizontalChartjsComponent,
    StackedChartjsComponent,
    InterpolationChartComponent,
    MultiAxisLineChartComponent,
    BasicChartComponent,
    LineStylingComponent,
    SteppedChartComponent,
    PointChartComponent,
    AnimationChartjsComponent,
    DelayChartComponent,
    DropChartComponent,
    LoopChartComponent,
    ProgressiveLineComponent,
    AreaChartjsComponent,
    LineDrawTimeChartComponent,
    LineStackedChartComponent,
    LineDatasetsChartComponent,
    BubbleChartjsComponent,
    BasicBubbleComponent,
    ScatterChartjsComponent,
    GeneralChartjsComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    LockScreenComponent,
    Error400Component,
    Error403Component,
    Error404Component,
    Error500Component,
    Error503Component,
    EmptyComponent,
    PublishedComponent,
    SwitcherComponent,
    BreadcrumbComponent,
    Select2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    NgbModule,
    NgApexchartsModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    DragDropModule,
    TagInputModule,
    FullCalendarModule,
    LightgalleryModule,
    ColorPickerModule,
    NgxMaterialTimepickerModule,
    ToastrModule.forRoot(),
    Select2Module,
    NgbTooltipModule,

    MatSortModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatListModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatRadioModule,
    MatAutocompleteModule,
    MatCardModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatInputModule,
    MatStepperModule,
    MatButtonModule,
    MatTableModule,
    MatSliderModule,
    MatSelectModule,
    MatIconModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatChipsModule,
    MatDialogModule,
    MatMenuModule,
    MatExpansionModule,
    MatGridListModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatSidenavModule,
    MatSnackBarModule,
    DatePipe,
    MatTabsModule,
    MatToolbarModule,
    CdkScrollable,
    MatTreeModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
