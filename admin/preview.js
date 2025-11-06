// Custom Preview Component for Decap CMS
// This script runs inside the preview iframe, where React is available globally.

const PagePreview = ({ entry, widgetFor }) => {
  // Get data from the CMS editor fields
  const title = entry.getIn(['data', 'title']);
  const body = widgetFor('body');
  
  // You would typically include your site's main CSS files here
  // to make the preview look exactly like the live site.
  // For now, we will use basic inline styles.

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', lineHeight: 1.6, maxWidth: '800px', margin: '0 auto' }}>
      
      {/* --- Title Preview --- */}
      <h1 
        style={{ 
          fontSize: '2rem', 
          color: '#333', 
          borderBottom: '2px solid #ddd', 
          paddingBottom: '10px' 
        }}
      >
        {title || "Untitled Page"}
      </h1>

      {/* --- Body/Markdown Preview --- */}
      <div 
        style={{ 
          marginTop: '30px', 
          fontSize: '1rem',
          // The widgetFor('body') function renders the markdown widget's content as styled HTML.
        }}
      >
        {body}
      </div>
      
      <p style={{ marginTop: '50px', fontStyle: 'italic', color: '#888' }}>
        --- End of Live Preview ---
      </p>
    </div>
  );
};

// Register the custom preview component for the 'pages' collection
// 'pages' matches the 'name' field in your admin/config.yml file
CMS.registerPreviewTemplate("pages", PagePreview);

