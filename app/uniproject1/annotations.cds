using MyService as service from '../../srv/service';

annotate service.university with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'university_no',
            Value : university_no,
        },
        {
            $Type : 'UI.DataField',
            Label : 'university_name',
            Value : university_name,
        },
        {
            $Type : 'UI.DataField',
            Label : 'university_type',
            Value : university_type,
        },
    ]
);
annotate service.university with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'university_no',
                Value : university_no,
            },
            {
                $Type : 'UI.DataField',
                Label : 'university_name',
                Value : university_name,
            },
            {
                $Type : 'UI.DataField',
                Label : 'university_type',
                Value : university_type,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
    ]
);
